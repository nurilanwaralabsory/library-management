<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
