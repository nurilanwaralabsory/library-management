import BookCard from '@/components/BookCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import HomeLayout from '@/layouts/home-layout';
import { Book } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

const SearchBooks = ({ books, filters }: { books: Book[]; filters: { genre: string; q: string } }) => {
    const [selectedGenre, setSelectedGenre] = useState(filters.genre || 'all');
    const [searchQuery, setSearchQuery] = useState(filters.q || '');
    const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

    const { url } = usePage();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchQuery);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    useEffect(() => {
        const params = {
            genre: selectedGenre,
            q: debouncedSearch,
        };

        const queryParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v));

        router.get(url.split('?')[0], queryParams, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        });
    }, [selectedGenre, debouncedSearch, url]);

    const handleGenreChange = (newGenre: string) => {
        if (searchQuery) setSearchQuery('');
        setSelectedGenre(newGenre);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedGenre !== 'all') setSelectedGenre('all');
        setSearchQuery(e.target.value);
    };

    const genres = [
        { value: 'all', label: 'Filter Kategori' },
        {
            value: 'Programming',
            label: 'Programming',
        },
        {
            value: 'Web Development',
            label: 'Web Development',
        },
        {
            value: 'System Design',
            label: 'System Design',
        },
        {
            value: 'Computer Science',
            label: 'Computer Science',
        },
        {
            value: 'Software',
            label: 'Software',
        },
        {
            value: 'Self Help',
            label: 'Self Help',
        },
    ];
    return (
        <HomeLayout>
            <section className="mt-12 px-4 text-center">
                <h2 className="mb-2 text-[18px] font-medium text-light-100 uppercase">TEMUKAN BACAAN HEBAT ANDA BERIKUTNYA:</h2>
                <h1 className="mb-6 text-3xl font-bold text-white md:text-[58px]">
                    Jelajahi dan Cari <br /> <span className="text-light-200">Buku Apapun</span> di Perpustakaan
                </h1>

                <div className="mt-4 flex justify-center">
                    <div className="relative w-full max-w-2xl">
                        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-light-200" />
                        <Input
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="h-12 w-full rounded-md border-none bg-slate-800 pl-10 text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                            placeholder="Cari buku favoritmu"
                        />
                    </div>
                </div>
            </section>
            <section className="mt-10 md:mt-18">
                <div className="flex items-center justify-between">
                    <h2 className="font-bebas-neue text-xl font-semibold text-light-100 md:text-4xl">Hasil Pencarian</h2>
                    <Select value={selectedGenre} onValueChange={handleGenreChange}>
                        <SelectTrigger className="w-[180px] border-none bg-[#232839] text-light-100">
                            <SelectValue placeholder="Web Development" className="text-light-100" />
                        </SelectTrigger>
                        <SelectContent className="border-none bg-[#232839] text-light-100">
                            <SelectGroup>
                                <SelectLabel>Kategori</SelectLabel>
                                {genres.map((genre) => (
                                    <SelectItem key={genre.value} value={genre.value} className="focus:bg-[#1b1d26] focus:text-light-100">
                                        {genre.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <ul className="book-list">
                    {books.map((book) => (
                        <BookCard key={book.title} {...book} />
                    ))}
                </ul>
            </section>
        </HomeLayout>
    );
};

export default SearchBooks;
