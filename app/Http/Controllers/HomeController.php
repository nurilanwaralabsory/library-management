<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\BorrowRecord;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $latestBooks = Book::latest()->take(13)->get();

        if ($latestBooks->isEmpty()) {
            return Inertia::render('home', [
                'featuredBook' => null,
                'books' => [],
            ]);
        }

        $user = Auth::user();

        $booksWithEligibility = $latestBooks->map(function ($book) use ($user) {
            $isEligible = false;
            $message = 'Anda harus login untuk meminjam buku.';

            if ($user) {
                $isBorrowedByCurrentUser = DB::table('borrow_records')
                    ->where('user_id', $user->id)
                    ->where('book_id', $book->id)
                    ->whereNull('return_date')
                    ->exists();

                $isEligible = $book->total_copies > 0 && !$isBorrowedByCurrentUser;

                if ($book->total_copies <= 0) {
                    $message = 'Stok buku ini sedang habis.';
                } elseif ($isBorrowedByCurrentUser) {
                    $message = 'Anda sedang meminjam buku ini.';
                } else {
                    $message = '';
                }
            } else {
                if ($book->total_copies <= 0) {
                    $message = 'Stok buku ini sedang habis.';
                }
            }

            $book->eligibility = [
                'isEligible' => $isEligible,
                'message' => $message,
            ];

            return $book;
        });

        $props = [
            'featuredBook' => $booksWithEligibility->first(),
            'books' => $booksWithEligibility,
        ];

        return Inertia::render('home', $props);
    }

    public function detailBook(Book $book)
    {
        $isEligible = false;
        $message = 'Anda harus login untuk meminjam buku';

        $user = Auth::user();
        if ($user) {
            $isBorrowedByCurrentUser = DB::table('borrow_records')
                ->where('user_id', $user->id)
                ->where('book_id', $book->id)
                ->whereNull('return_date')
                ->exists();
            $isEligible = $book->total_copies > 0 && !$isBorrowedByCurrentUser;
            $message = '';

            if ($book->total_copies <= 0) {
                $message = 'Buku sedang tidak tersedia';
            } else if ($isBorrowedByCurrentUser) {
                $message = 'Buku sedang dipinjam oleh Anda';
            } else {
                $message = '';
            }
        } else {
            if ($book->total_copies <= 0) {
                $message = 'Buku sedang tidak tersedia';
            }
        }

        return Inertia::render('detail-book', [
            'book' => $book,
            'eligibility' => [
                'isEligible' => $isEligible,
                'message' => $message,
            ]
        ]);
    }

    public function borrowBook(Book $book)
    {
        $user = Auth::user();
        if ($user->status !== 'APPROVED') {
            return back()->with('error', 'Akun Anda belum disetujui untuk meminjam buku');
        }

        $currentBorrowsCount = DB::table('borrow_records')
            ->where('user_id', $user->id)
            ->whereNull('return_date')
            ->count();

        if ($currentBorrowsCount >= 3) {
            return back()->with('error', 'Anda hanya dapat meminjam maksimal 3 buku sekaligus.');
        }

        try {
            DB::transaction(function () use ($user, $book) {
                DB::table('borrow_records')->insert([
                    'id' => uuid_create(),
                    'user_id' => $user->id,
                    'book_id' => $book->id,
                    'borrow_date' => now(),
                    'due_date' => now()->addDays(7),
                    'return_date' => null,
                    'status' => 'BORROWED',
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                $book->decrement('total_copies');
                return back()->with('success', 'Buku berhasil dipinjam');
            });
        } catch (\Exception $e) {
            report($e);
            return back()->with('error', 'Terjadi kesalahan pada server, silakan coba lagi.');
        }
    }

    public function profile()
    {
        $user = Auth::user();

        $borrowedRecords = BorrowRecord::where('user_id', $user->id)
            ->whereNull('return_date')
            ->orderBy('borrow_date', 'desc')
            ->with('book')->get();
        $ktm_image = $user->ktm ? asset('storage/' . $user->ktm) : null;

        return Inertia::render('my-profile', [
            'user' => $user,
            'ktm_image' => $ktm_image,
            'borrowedRecords' => $borrowedRecords,
        ]);
    }
}
