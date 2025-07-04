import { Book, SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import BookCover from './BookCover';
import BorrowBook from './BorrowBook';

interface Props extends Book {
    eligibility: {
        isEligible: boolean;
        message: string;
    };
}

export default function BookOverview({
    id,
    title,
    author,
    genre,
    total_copies: totalCopies,
    available_copies: availableCopies,
    description,
    cover_color: coverColor,
    cover_url: coverUrl,
    eligibility,
}: Props) {
    const { auth } = usePage<SharedData>().props;

    return (
        <section className="book-overview">
            <div className="flex flex-1 flex-col gap-5">
                <h1>{title}</h1>

                <div className="book-info">
                    <p>
                        Oleh <span className="font-semibold text-light-200">{author}</span>
                    </p>

                    <p>
                        Kategori <span className="font-semibold text-light-200">{genre}</span>
                    </p>
                </div>

                <div className="book-copies">
                    <p>
                        Total Buku <span>{totalCopies}</span>
                    </p>

                    <p>
                        Buku Tersedia <span>{availableCopies}</span>
                    </p>
                </div>

                <p className="book-description">{description}</p>

                {auth.user && <BorrowBook bookId={id} title={title} eligibility={eligibility} />}
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
