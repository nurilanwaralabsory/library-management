<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'title',
        'author',
        'genre',
        'rating',
        'cover_url',
        'cover_color',
        'description',
        'total_copies',
        'available_copies',
        'video_url',
        'summary',
    ];

    public function borrowRecords(): HasMany
    {
        return $this->hasMany(BorrowRecord::class);
    }
    public function borrowingUsers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'borrow_records', 'book_id', 'user_id')
            ->withPivot('borrow_date', 'due_date', 'return_date', 'status')
            ->withTimestamps();
    }
}
