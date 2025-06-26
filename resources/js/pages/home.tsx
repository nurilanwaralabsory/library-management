import BookList from '@/components/BookList';
import BookOverview from '@/components/BookOverview';
import HomeLayout from '@/layouts/home-layout';
import { Book } from '@/types';

interface Props extends Book {
    eligibility: {
        isEligible: boolean;
        message: string;
    };
}

export default function ({ featuredBook, books }: { featuredBook: Props; books: Book[]; eligibility: { isEligible: boolean; message: string } }) {
    return (
        <HomeLayout>
            <BookOverview {...featuredBook} eligibility={featuredBook.eligibility} />

            <BookList title="Latest Books" books={books.slice(1)} containerClassName="mt-28" />
        </HomeLayout>
    );
}
