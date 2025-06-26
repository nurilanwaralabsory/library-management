<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/books/{book}', [HomeController::class, 'detailBook'])->name('detail-book');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::post('/books/{book}/borrow', [HomeController::class, 'borrowBook'])->name('borrow-book');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
