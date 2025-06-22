import BookList from '@/components/BookList';
import BookOverview from '@/components/BookOverview';
import HomeLayout from '@/layouts/home-layout';
import { Book } from '@/types';

export default function ({ featuredBook, books }: { featuredBook: Book; books: Book[] }) {
    console.log(featuredBook);
    return (
        <HomeLayout>
            <BookOverview {...featuredBook} />

            <BookList title="Latest Books" books={books.slice(1)} containerClassName="mt-28" />
        </HomeLayout>
    );
}
