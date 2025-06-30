import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import AppLayout from '@/layouts/app-layout';
import { BorrowRequests, type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

type RequestStatus = 'BORROWED' | 'RETURNED' | 'LATE RETURNED';
type BadgeVariant = 'borrowed' | 'returned' | 'lateReturned';

const mapStatusToBadgeVariant = (status: RequestStatus): BadgeVariant => {
    switch (status) {
        case 'BORROWED':
            return 'borrowed';
        case 'RETURNED':
            return 'returned';
        case 'LATE RETURNED':
            return 'lateReturned';
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
            <div className="mx-auto w-full max-w-7xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <div className="mb-6 flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <h1 className="mb-4 text-2xl font-bold text-gray-800 sm:mb-0">Borrow Book Requests</h1>
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
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-white text-xs text-gray-500 uppercase">
                            <tr>
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
                                <th scope="col" className="px-4 py-3 font-semibold">
                                    Receipt
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {borrowRequests.map((req) => (
                                <tr key={req.id} className="border-b border-gray-100 bg-white align-middle">
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img
                                                className="mr-4 h-14 w-10 rounded-md object-cover"
                                                src="https://placehold.co/40x56/0073e6/white?text=Book"
                                                alt="The Great Reclamation"
                                            />
                                            <span className="font-bold text-gray-800">{req.book.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img
                                                className="mr-3 h-10 w-10 rounded-full object-cover"
                                                src="https://placehold.co/40x40/f9a8d4/1e293b?text=DS"
                                                alt="Darrell Steward"
                                            />
                                            <div>
                                                <div className="font-bold text-gray-800">{req.user.name}</div>
                                                <div className="text-xs text-gray-500">{req.user.email}</div>
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
                                                    <DropdownMenuRadioItem value="BORROWED">
                                                        <Badge variant="borrowed">BORROWED</Badge>
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="RETURNED">
                                                        <Badge variant="returned">RETURNED</Badge>
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="LATE RETURNED">
                                                        <Badge variant="lateReturned">LATE RETURNED</Badge>
                                                    </DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">Dec 19 2023</td>
                                    <td className="px-4 py-4 whitespace-nowrap">Dec 29 2023</td>
                                    <td className="px-4 py-4 whitespace-nowrap">Dec 31 2023</td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <button className="rounded-lg border border-indigo-200 px-4 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-50">
                                            Generate
                                        </button>
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
