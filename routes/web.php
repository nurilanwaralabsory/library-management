<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NotificationController;
use App\Models\Notification;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/books/{book}', [HomeController::class, 'detailBook'])->name('detail-book');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/books/{book}/borrow', [HomeController::class, 'borrowBook'])->name('borrow-book');
    Route::get('/my-profile', [HomeController::class, 'profile'])->name('my-profile');
    Route::delete('/notifications/{notification}', [NotificationController::class, 'destroy'])->name('notifications.destroy');
});

Route::middleware(['auth', 'role:ADMIN'])->group(function () {
    Route::get('/borrow-requests', [DashboardController::class, 'borrowRequests'])->name('borrow-requests');
    Route::get('/account-requests', [DashboardController::class, 'accountRequests'])->name('account-requests');
    Route::get('/all-books', [BookController::class, 'index'])->name('all-books');
    Route::get('/create-book', [BookController::class, 'create'])->name('create-book');
    Route::delete('/books/{book}', [BookController::class, 'destroy'])->name('books.destroy');
    Route::patch('/dashboard/borrow-requests/{borrowRecord}', [DashboardController::class, 'updateStatus'])->name('borrow-requests.update-status');
    Route::patch('/dashboard/account-requests/{user}', [DashboardController::class, 'updateAccountStatus'])->name('account-requests.update-status');
});

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'role:ADMIN'])->name('dashboard');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
