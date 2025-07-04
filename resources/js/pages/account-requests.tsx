import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useInitials } from '@/hooks/use-initials';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, User } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Eye, LoaderCircle } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Users',
        href: '/all-users',
    },
];

const AccountRequest = ({ users }: { users: User[] }) => {
    const getInitials = useInitials();
    const { processing } = useForm({});
    const [open, setOpen] = useState(false);

    const handleUpdateAccountStatus = (userId: number) => {
        router.patch(
            route('account-requests.update-status', { user: userId }),
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setOpen(false);
                },
            },
        );
    };
    return (
        <div>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="All Users" />
                <div className="mx-auto w-full rounded-2xl bg-white p-6 sm:p-8">
                    <div className="mb-6 flex flex-col items-start justify-between sm:flex-row sm:items-center">
                        <h1 className="text-2xl font-medium text-dark-100 sm:mb-0">Account Request</h1>
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
                                        Name
                                    </th>
                                    <th scope="col" className="px-4 py-3 font-semibold">
                                        Tanggal Bergabung
                                    </th>
                                    <th scope="col" className="px-4 py-3 font-semibold">
                                        Nomor Induk Mahasiswa
                                    </th>
                                    <th scope="col" className="px-4 py-3 font-semibold">
                                        Kartu Tanda Mahasiswa
                                    </th>
                                    <th scope="col" className="px-4 py-3 font-semibold">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b border-gray-100 bg-white align-middle">
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-x-3">
                                                <Avatar className="h-10 w-10 overflow-hidden rounded-full">
                                                    <AvatarImage src={user.name} alt={user.name} />
                                                    <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                                        {getInitials(user.name)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-bold">{user.name}</p>
                                                    <p>{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            {new Date(user.created_at).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">{user.nim}</td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <Dialog open={open} onOpenChange={setOpen}>
                                                <DialogTrigger asChild>
                                                    <Button className="cursor-pointer bg-transparent text-blue-500 shadow-none hover:bg-transparent">
                                                        <div className="flex items-center gap-x-2">
                                                            <Eye className="ml-2 h-4 w-4" />
                                                            <span>Lihat KTM</span>
                                                        </div>
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="border-none bg-white text-white">
                                                    <DialogTitle className="text-[#1E293B]">Setujui akun ini?</DialogTitle>
                                                    <DialogDescription className="text-[#64748B]">
                                                        Setujui permintaan akun siswa dan berikan akses ke sistem perpustakaan.
                                                    </DialogDescription>
                                                    <DialogFooter className="gap-2">
                                                        <DialogClose asChild>
                                                            <Button variant="secondary" className="cursor-pointer">
                                                                Batal
                                                            </Button>
                                                        </DialogClose>

                                                        <Button
                                                            variant="destructive"
                                                            disabled={processing}
                                                            asChild
                                                            className="cursor-pointer bg-[#4C7B62] text-white hover:bg-[#4C7B62]/90"
                                                            onClick={() => handleUpdateAccountStatus(user.id)}
                                                        >
                                                            <button type="submit">
                                                                {' '}
                                                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />} Konfirmasi{' '}
                                                            </button>
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <Button
                                                className="cursor-pointer bg-[#ECFDF3] text-[#027A48] hover:bg-[#ECFDF3]/90"
                                                onClick={() => handleUpdateAccountStatus(user.id)}
                                            >
                                                <button type="submit">
                                                    {' '}
                                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />} Setujui Akun{' '}
                                                </button>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppLayout>
        </div>
    );
};

export default AccountRequest;
