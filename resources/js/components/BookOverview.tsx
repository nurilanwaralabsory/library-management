import { Book } from '@/types';
import BookCover from './BookCover';
import BorrowBook from './BorrowBook';

export default function BookOverview({
    title,
    author,
    genre,
    rating,
    total_copies: totalCopies,
    available_copies: availableCopies,
    description,
    cover_color: coverColor,
    cover_url: coverUrl,
}: Book) {
    return (
        <section className="book-overview">
            <div className="flex flex-1 flex-col gap-5">
                <h1>{title}</h1>

                <div className="book-info">
                    <p>
                        By <span className="font-semibold text-light-200">{author}</span>
                    </p>

                    <p>
                        Category <span className="font-semibold text-light-200">{genre}</span>
                    </p>

                    <div className="flex flex-row gap-1">
                        <img src="/icons/star.svg" alt="star" width={22} height={22} />
                        <p>{rating}</p>
                    </div>
                </div>

                <div className="book-copies">
                    <p>
                        Total Books <span>{totalCopies}</span>
                    </p>

                    <p>
                        Available Books <span>{availableCopies}</span>
                    </p>
                </div>

                <p className="book-description">{description}</p>

                <BorrowBook />

                {/* {user && <BorrowBook bookId={id} userId={userId} borrowingEligibility={borrowingEligibility} />} */}
            </div>

            <div className="relative flex flex-1 justify-center">
                <div className="relative">
                    <BookCover variant="wide" className="z-10" coverColor={coverColor} coverImage={coverUrl} />

                    <div className="absolute top-10 left-16 rotate-12 opacity-40 max-sm:hidden">
                        <BookCover variant="wide" coverColor={coverColor} coverImage={coverUrl} />
                    </div>
                </div>
            </div>
        </section>
    );
}
