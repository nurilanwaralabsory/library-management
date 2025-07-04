import BookCover from '@/components/BookCover';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import AppLayout from '@/layouts/app-layout';
import { Book, BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Plus, Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Books',
        href: '/all-books',
    },
];

const AllBooks = ({ books }: { books: Book[] }) => {
    const handleDeleteBook = (bookId: string) => {
        router.delete(`/books/${bookId}`, {
            preserveScroll: true,
            onSuccess: () => {
                console.log('Book deleted successfully');
            },
            onError: (error) => {
                console.error('Error deleting book:', error);
            },
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="All Books" />
            <div className="mx-auto w-full rounded-2xl bg-white p-6 sm:p-8">
                <div className="mb-6 flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <h1 className="text-2xl font-medium text-dark-100 sm:mb-0">All Books</h1>
                    <Link href="/create-book">
                        <button className="flex cursor-pointer items-center space-x-2 rounded-lg bg-[#25388C] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#25388C]/90">
                            <Plus className="h-4 w-4" />
                            <span>Create a New Book</span>
                        </button>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-dark-100">
                        <thead className="rounded-2xl bg-[#F8F8FF] text-xs text-dark-100 uppercase">
                            <tr className="font-medium text-[#3A354E]">
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Book Title
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Author
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Genre
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Date Created
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id} className="border-b border-gray-100 bg-white align-middle">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-x-3">
                                            <BookCover
                                                variant="extraSmall"
                                                className="z-10"
                                                coverColor={book.cover_color}
                                                coverImage={book.cover_url}
                                            />
                                            <p className="truncate font-bold">{book.title}</p>
                                        </div>
                                    </td>
                                    <td className="truncate px-4 py-4 whitespace-nowrap">{book.author}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">{book.genre}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {new Date(book.created_at).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <button className="cursor-pointer text-blue-500">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <span className="mx-2">|</span>
                                            <button className="cursor-pointer text-red-500">
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Trash2 className="h-4 w-4" />
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Apakah kamu yakin inngin menghapus buku ini?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Menghapus buku ini akan menghapus semua data terkait buku ini. Apakah kamu yakin ingin
                                                                melanjutkan?
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Batal</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                className="cursor-pointer bg-red-500 hover:bg-red-500/90"
                                                                onClick={() => handleDeleteBook(book.id)}
                                                            >
                                                                Hapus
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
};

export default AllBooks;
