<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title', 255);
            $table->string('author', 255);
            $table->text('genre');
            $table->integer('rating');
            $table->text('cover_url');
            $table->string('cover_color', 7);
            $table->text('description');
            $table->integer('total_copies')->default(1);
            $table->integer('available_copies')->default(0);
            $table->text('video_url');
            $table->text('summary');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
