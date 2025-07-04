import { cn } from '@/lib/utils';
import { SharedData } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Bell, BookCheck, X } from 'lucide-react';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

const Header = () => {
    const page = usePage<SharedData>();
    const { auth, notifications } = page.props;
    const pathname = usePage();

    const handleDeleteNotification = (notificationId: string) => {
        router.delete(route('notifications.destroy', notificationId), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <div className="flex items-center gap-3">
                    <img src="/icons/logo.svg" alt="logo" width={40} height={40} />
                    <h1 className="text-2xl font-bold text-white">NFLibrary</h1>
                </div>
            </Link>

            <ul className="flex flex-row items-center gap-8">
                <li>
                    <Link
                        href="/"
                        className={cn(
                            'cursor-pointer text-base capitalize',
                            pathname.url == '/' || pathname.url.startsWith('/books') ? 'text-light-200' : 'text-light-100',
                        )}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/search"
                        className={cn('cursor-pointer text-base capitalize', pathname.url == '/search' ? 'text-light-200' : 'text-light-100')}
                    >
                        Search
                    </Link>
                </li>
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex cursor-pointer items-center gap-1 text-base text-light-100">
                                <div className="relative">
                                    <Bell />
                                    {notifications.length > 0 && (
                                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                            {notifications.length}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-96 border-none bg-gradient-to-b from-[#232839] to-[#12141D] text-light-100" align="center">
                            {notifications.map((notification) => (
                                <div key={notification.id}>
                                    <DropdownMenuItem className="flex cursor-default items-center gap-4 p-3 focus:bg-transparent">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                            <BookCheck size={20} className="text-white" />
                                        </div>

                                        <div className="flex flex-grow flex-col">
                                            <p className="text-sm font-semibold text-light-100">{notification.title}</p>
                                            <p className="text-sm text-light-200">{notification.message}</p>
                                        </div>

                                        <div
                                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full"
                                            onClick={() => handleDeleteNotification(notification.id)}
                                        >
                                            <X size={18} className="text-light-300" />
                                        </div>
                                    </DropdownMenuItem>

                                    <DropdownMenuSeparator className="my-1 bg-dark-400/70" />
                                </div>
                            ))}

                            <DropdownMenuSeparator className="my-1 bg-dark-400/70" />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
                {auth.user && auth.user.role === 'USER' ? (
                    <li>
                        <Link href={route('my-profile')}>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className="cursor-pointer text-base font-medium text-light-100 capitalize">{auth.user.name.split(' ')[0]}</p>
                            </div>
                        </Link>
                    </li>
                ) : (
                    <Link href={route('login')}>
                        <Button className="cursor-pointer text-dark-100">Login</Button>
                    </Link>
                )}
            </ul>
        </header>
    );
};

export default Header;
