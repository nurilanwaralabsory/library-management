import { cn } from '@/lib/utils';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';

const Header = () => {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const pathname = usePage();

    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <img src="/icons/logo.svg" alt="logo" width={40} height={40} />
            </Link>

            <ul className="flex flex-row items-center gap-8">
                <li>
                    <Link href="/" className={cn('cursor-pointer text-base capitalize', pathname.url == '/' ? 'text-light-200' : 'text-light-100')}>
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
