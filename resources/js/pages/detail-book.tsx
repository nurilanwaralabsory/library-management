import BookCover from '@/components/BookCover';
import BookOverview from '@/components/BookOverview';
import HomeLayout from '@/layouts/home-layout';
import { Book } from '@/types';

const DetailBook = ({
    book,
    eligibility,
    similiarBooks,
}: {
    book: Book;
    eligibility: { isEligible: boolean; message: string };
    similiarBooks: Book[];
}) => {
    return (
        <HomeLayout>
            <BookOverview {...book} eligibility={eligibility} />
            <div className="book-details">
                <div className="flex w-full flex-col gap-10 md:w-1/2">
                    <section className="flex flex-col gap-7">
                        <h3>Video</h3>

                        {/* <BookVideo videoUrl={bookDetails.videoUrl} /> */}
                        <video className="w-full rounded-xl" controls>
                            <source src={book.video_url} type="video/mp4" />
                            Browser Anda tidak mendukung tag video.
                        </video>
                    </section>
                    <section className="flex flex-col gap-7">
                        <h3>Ringkasan</h3>

                        <div className="space-y-5 text-justify text-xl text-light-100">
                            {book.summary.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </section>
                </div>

                {/*  SIMILAR*/}
                <section className="w-full md:w-1/2">
                    <h3>Buku Serupa</h3>

                    <ul className="book-list">
                        {similiarBooks.map((book) => (
                            <BookCover
                                coverColor={book.cover_color}
                                coverImage={book.cover_url}
                                key={book.title}
                                className="h-[199px] w-[144px] xs:h-[239px] xs:w-[174px]"
                            />
                        ))}
                    </ul>
                </section>
            </div>
        </HomeLayout>
    );
};

export default DetailBook;
