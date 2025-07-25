import { cn } from '@/lib/utils';
import { Book } from '@/types';
import { Link } from '@inertiajs/react';
import BookCover from './BookCover';
import { Button } from './ui/button';

const BookCard = ({ id, title, genre, cover_color: coverColor, cover_url: coverUrl, isLoanedBook = false }: Book) => {
    return (
        <li className={cn(isLoanedBook && 'w-full xs:w-52')}>
            <Link href={route('detail-book', id)} className={cn(isLoanedBook && 'flex w-full flex-col items-center')}>
                <BookCover coverColor={coverColor} coverImage={coverUrl} className="h-[199px] w-[144px] xs:h-[239px] xs:w-[174px]" />

                <div className={cn('mt-4', !isLoanedBook && 'max-w-28 xs:max-w-40')}>
                    <p className="book-title">{title}</p>
                    <p className="book-genre">{genre}</p>
                </div>

                {isLoanedBook && (
                    <div className="mt-3 w-full">
                        <div className="book-loaned">
                            <img src="/icons/calendar.svg" alt="calendar" width={18} height={18} className="object-contain" />
                            <p className="text-light-100">11 days left to return</p>
                        </div>

                        <Button className="book-btn">Download receipt</Button>
                    </div>
                )}
            </Link>
        </li>
    );
};

export default BookCard;
