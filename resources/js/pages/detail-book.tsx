import BookOverview from '@/components/BookOverview';
import HomeLayout from '@/layouts/home-layout';
import { Book } from '@/types';

const DetailBook = ({ book, eligibility }: { book: Book; eligibility: { isEligible: boolean; message: string } }) => {
    return (
        <HomeLayout>
            <BookOverview {...book} eligibility={eligibility} />
        </HomeLayout>
    );
};

export default DetailBook;
