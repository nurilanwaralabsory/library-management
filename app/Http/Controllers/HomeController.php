<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $latestBooks = Book::latest()->take(13)->get();

        $props = [
            'featuredBook' => $latestBooks->first(),
            'books' => $latestBooks
        ];

        return Inertia::render('home', $props);
    }
}
