<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NFLibrary - Search</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gradient-to-b from-slate-900 to-slate-950 text-white min-h-screen pb-32">

    <nav class="flex justify-between items-center px-6 py-4 bg-slate-950 border-b border-slate-700">
      <div class="text-xl font-bold flex items-center space-x-2">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/open-book.png" class="w-6 h-6" alt="Book Icon">
        <span>NFLibrary</span>
      </div>
      <div class="flex items-center space-x-6">
        <a href="#" class="hover:text-sky-400">Home</a>
        <a href="#" class="hover:text-sky-400">Search</a>
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center font-bold">AH</div>
          <span>Kim</span>
        </div>
      </div>
    </nav>
    <section class="text-center mt-12 px-4">
      <h2 class="text-sm tracking-widest text-slate-400 uppercase mb-2">Discover your next great read:</h2>
      <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-6">
        Explore and Search for <span class="text-sky-400">Any Book</span> In Our Library
      </h1>

      <!-- Search Bar -->
      <div class="flex justify-center mt-4">
        <input type="text" placeholder="Thriller Mystery" class="w-full max-w-xl px-4 py-3 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-400" />
      </div>
    </section>
    <section class="mt-12 px-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Search Results</h2>
        <select class="bg-slate-800 text-white px-3 py-2 rounded-md">
          <option>Filter by: Department</option>
          <option>Psychological Thriller</option>
          <option>Thriller / Suspense</option>
        </select>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <!-- Book Card -->
        <div class="text-center">
          <img src="https://m.media-amazon.com/images/I/71bqH+qlrwL.jpg" alt="Origin" class="w-full h-44 object-cover rounded" />
          <h3 class="mt-2 font-semibold text-sm">Origin – By Dan Brown</h3>
          <p class="text-xs text-slate-400">Thriller / Mystery</p>
        </div>

        <div class="text-center">
          <img src="https://m.media-amazon.com/images/I/81fp5+0SmKL.jpg" alt="The Fury" class="w-full h-44 object-cover rounded" />
          <h3 class="mt-2 font-semibold text-sm">The Fury – By Alex Michaelides</h3>
          <p class="text-xs text-slate-400">Psychological Thriller</p>
        </div>

        <div class="text-center">
          <img src="https://m.media-amazon.com/images/I/71IvcIXhxkL.jpg" alt="The Maidens" class="w-full h-44 object-cover rounded" />
          <h3 class="mt-2 font-semibold text-sm">The Maidens – By Alex Michaelides</h3>
          <p class="text-xs text-slate-400">Psychological Thriller</p>
        </div>

        <div class="text-center">
          <img src="https://m.media-amazon.com/images/I/81o7VSPqEOL.jpg" alt="Gerald's Game" class="w-full h-44 object-cover rounded" />
          <h3 class="mt-2 font-semibold text-sm">Gerald’s Game – By Stephen King</h3>
          <p class="text-xs text-slate-400">Horror Game</p>
        </div>

        <div class="text-center">
          <img src="https://m.media-amazon.com/images/I/71wEC7z-ukL.jpg" alt="Don't Turn Around" class="w-full h-44 object-cover rounded" />
          <h3 class="mt-2 font-semibold text-sm">Don’t Turn Around – By J. Barry</h3>
          <p class="text-xs text-slate-400">Thriller / Suspense</p>
        </div>

        <div class="text-center">
          <img src="https://m.media-amazon.com/images/I/81T0kN8pYWL.jpg" alt="Amazing Facts" class="w-full h-44 object-cover rounded" />
          <h3 class="mt-2 font-semibold text-sm">Amazing Facts – By Jeopardy</h3>
          <p class="text-xs text-slate-400">Trivia / Facts</p>
        </div>
      </div>
      <div class="flex justify-center mt-10 space-x-2">
        <button class="px-3 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">1</button>
        <button class="px-3 py-2 bg-slate-800 text-white rounded hover:bg-slate-700">...</button>
        <button class="px-3 py-2 bg-slate-800 text-white rounded hover:bg-slate-700">10</button>
      </div>
    </section>
  </body>
</html>
