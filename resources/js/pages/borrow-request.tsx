import BookCover from '@/components/BookCover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useInitials } from '@/hooks/use-initials';
import AppLayout from '@/layouts/app-layout';
import { BorrowRequests, type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

type RequestStatus = 'BORROWED' | 'RETURNED' | 'LATE RETURNED' | 'PENDING';
type BadgeVariant = 'borrowed' | 'returned' | 'lateReturned' | 'pending';

const mapStatusToBadgeVariant = (status: RequestStatus): BadgeVariant => {
    switch (status) {
        case 'BORROWED':
            return 'borrowed';
        case 'RETURNED':
            return 'returned';
        case 'LATE RETURNED':
            return 'lateReturned';
        case 'PENDING':
            return 'pending';
        default:
            return 'borrowed';
    }
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Borrow Request',
        href: '/dashboard/borrow-requests',
    },
];

const BorrowRequest = ({ borrowRequests }: { borrowRequests: BorrowRequests[] }) => {
    const getInitials = useInitials();
    const handleStatusChange = (newStatus: string, requestId: number) => {
        router.patch(
            route('borrow-requests.update-status', { borrowRecord: requestId }),
            {
                status: newStatus,
            },
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Borrow Request" />
            <div className="mx-auto w-full rounded-2xl bg-white p-6 sm:p-8">
                <div className="mb-6 flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <h1 className="text-2xl font-medium text-dark-100 sm:mb-0">Borrow Book Requests</h1>
                    <button className="flex items-center space-x-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">
                        <span>Oldest to Recent</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 4h13M3 8h9M3 12h9m-9 4h9m5-4v.01M18 8v8m4-4h-8"
                            />
                        </svg>
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-dark-100">
                        <thead className="rounded-2xl bg-[#F8F8FF] text-xs text-dark-100 uppercase">
                            <tr className="font-medium text-[#3A354E]">
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Book
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    User Requested
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Status
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Borrowed date
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Return date
                                </th>
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Due Date
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {borrowRequests.map((req) => (
                                <tr key={req.id} className="border-b border-gray-100 bg-white align-middle">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-x-3">
                                            <BookCover
                                                variant="extraSmall"
                                                className="z-10"
                                                coverColor={req.book.cover_color}
                                                coverImage={req.book.cover_url}
                                            />
                                            <p className="truncate font-bold">{req.book.title}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-x-3">
                                            <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                                                <AvatarImage src={req.user.name} alt={req.user.name} />
                                                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                                    {getInitials(req.user.name)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-bold">{req.user.name}</p>
                                                <p>{req.user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Badge variant={mapStatusToBadgeVariant(req.status)}>{req.status}</Badge>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56">
                                                <DropdownMenuRadioGroup
                                                    value={req.status}
                                                    onValueChange={(newStatus) => {
                                                        handleStatusChange(newStatus, req.id);
                                                    }}
                                                >
                                                    <DropdownMenuRadioItem value="PENDING">
                                                        <Badge variant="pending">PENDING</Badge>
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="BORROWED">
                                                        <Badge variant="borrowed">BORROWED</Badge>
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="RETURNED">
                                                        <Badge variant="returned">RETURNED</Badge>
                                                    </DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {new Date(req.borrow_date).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {req.return_date === null ? (
                                            <span className="text-red-500">Not Returned</span>
                                        ) : (
                                            new Date(req.return_date).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })
                                        )}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        {new Date(req.due_date).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
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

export default BorrowRequest;
