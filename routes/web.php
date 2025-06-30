<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/books/{book}', [HomeController::class, 'detailBook'])->name('detail-book');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/books/{book}/borrow', [HomeController::class, 'borrowBook'])->name('borrow-book');
    Route::get('/my-profile', [HomeController::class, 'profile'])->name('my-profile');
});

Route::middleware(['auth', 'role:ADMIN'])->group(function () {
    Route::get('/dashboard/borrow-requests', [DashboardController::class, 'borrowRequests'])->name('borrow-requests');
    Route::patch('/dashboard/borrow-requests/{borrowRecord}', [DashboardController::class, 'updateStatus'])->name('borrow-requests.update-status');
});

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'role:ADMIN'])->name('dashboard');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
