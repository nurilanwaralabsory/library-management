<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::latest()->get();
        return Inertia::render('all-books', [
            'books' => $books
        ]);
    }

    public function create()
    {
        return Inertia::render('create-book');
    }

    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->route('all-books')->with('success', 'Buku berhasil dihapus');
    }
}
