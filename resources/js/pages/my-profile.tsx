import BookCover from '@/components/BookCover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import HomeLayout from '@/layouts/home-layout';
import { Book, User } from '@/types';
import { Link } from '@inertiajs/react';
import { differenceInDays, isPast, parseISO } from 'date-fns';
import { BadgeAlert, BadgeCheck, BookIcon, Calendar, CircleCheck, OctagonAlert } from 'lucide-react';

interface Props extends Book {
    borrow_date: string;
    due_date: string;
    return_date: string;
    status: string;
    book: Book;
}

const calculateDaysLeft = (dueDateString: string) => {
    if (!dueDateString) return 0;

    const dueDate = parseISO(dueDateString);
    const today = new Date();

    if (isPast(dueDate)) {
        return 0;
    }

    return differenceInDays(dueDate, today) + 1;
};

const MyProfile = ({ user, ktm_image, borrowedRecords }: { user: User; ktm_image: string; borrowedRecords: Props[] }) => {
    return (
        <HomeLayout>
            <div className="flex flex-col-reverse gap-12 sm:gap-32 xl:flex-row xl:gap-16">
                <div className="relative">
                    <div className="absolute -top-4 left-1/2 z-10 h-20 w-14 -translate-x-1/2 transform rounded-t-lg rounded-b-full bg-[#464F6F]"></div>
                    <div className="absolute top-9 left-1/2 z-20 h-2 w-9 -translate-x-1/2 transform rounded-xl bg-[#1E2230]"></div>

                    <div className="card-shadow relative w-96 overflow-hidden rounded-2xl bg-gradient-to-b from-[#232839] to-[#12141D] p-8">
                        <div className="mt-12 mb-6 flex items-center space-x-4">
                            <div className="relative">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex-1">
                                {user.status === 'APPROVED' ? (
                                    <div className="flex items-center space-x-1">
                                        <BadgeCheck fill="oklch(0.8758 0.0587 73.67)" />
                                        <span className="text-sm font-medium text-light-100">Akun Terverifikasi</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-1">
                                        <BadgeAlert fill="#FF6C6F" />
                                        <span className="text-sm font-medium text-light-100">Akun belum disetujui </span>
                                    </div>
                                )}
                                <h2 className="text-xl font-bold text-white">{user.name}</h2>
                                <p className="text-sm text-light-100">{user.email}</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="mb-1 text-sm text-light-100">Nomor Induk Mahasiswa</p>
                            <p className="text-2xl font-bold tracking-wide text-white">234567856</p>
                        </div>

                        <img src={ktm_image} alt={`KTM.${user.name}`} className="rounded-lg" />
                    </div>
                </div>
                <div className="mx-auto">
                    <h1 className="mb-8 text-3xl font-bold text-light-100">Buku Pinjaman</h1>
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {borrowedRecords.map((record) => (
                            <div key={record.id} className="relative w-65 overflow-hidden rounded-2xl bg-gray-900 p-6 text-white">
                                <div
                                    className="flex justify-center rounded-lg py-6"
                                    style={{ backgroundColor: `color-mix(in srgb, ${record.book.cover_color} 70%, black 50%)` }}
                                >
                                    <li className="w-full xs:w-52">
                                        <div className="flex w-full flex-col items-center">
                                            <BookCover coverColor={record.book.cover_color} coverImage={record.book.cover_url} variant="medium" />
                                        </div>
                                    </li>
                                </div>

                                <div className="mt-4 flex flex-col space-y-4">
                                    <div className="flex flex-col space-y-1">
                                        <h3 className="truncate text-xl font-semibold">{record.book.title}</h3>
                                        <p className="text-light-100 italic">{record.book.genre}</p>
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <div className="flex items-center space-x-2 text-sm text-light-100">
                                            <BookIcon width={17} height={17} className="text-blue-100" />
                                            <span>
                                                Dipinjam pada{' '}
                                                {new Date(record.borrow_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })}
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-2 text-sm text-light-100">
                                            {record.status === 'RETURNED' ? (
                                                <div className="flex items-center space-x-2 text-sm text-light-100">
                                                    <CircleCheck width={17} height={17} className="text-[#85FFC6]" />
                                                    <span>
                                                        Dikembalikan{' '}
                                                        {new Date(record.return_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })}
                                                    </span>
                                                </div>
                                            ) : calculateDaysLeft(record.due_date) === 0 ? (
                                                <div className="flex items-center space-x-2 text-sm text-[#FF6C6F]">
                                                    <OctagonAlert width={17} height={17} />
                                                    <span>Pengembalian terlambat</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center space-x-2 text-sm text-light-100">
                                                    <Calendar width={17} height={17} className="text-light-200" />
                                                    <span>{calculateDaysLeft(record.due_date)} hari tersisa</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <div className="flex flex-col items-center space-y-2">
                        <img src="/icons/not.svg" alt="belum ada buku pinjaman" />
                        <p className="text-xl font-medium text-white">Kamu Belum Meminjam Buku Apapun</p>
                        <div className="flex flex-col items-center text-center">
                            <p className="text-light-100">Pinjam Buku Sekarang</p>
                            <Link href={route('home')}>
                                <Button className="my-2 cursor-pointer text-dark-100">Pinjam Buku</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default MyProfile;
