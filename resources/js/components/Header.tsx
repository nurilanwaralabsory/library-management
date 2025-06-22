import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Avatar } from './ui/avatar';

const Header = () => {
    const pathname = usePage();
    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <img src="/icons/logo.svg" alt="logo" width={40} height={40} />
            </Link>

            <ul className="flex flex-row items-center gap-8">
                <li>
                    <Link
                        href="/library"
                        className={cn('cursor-pointer text-base capitalize', pathname.url == '/library' ? 'text-light-200' : 'text-light-100')}
                    >
                        Library
                    </Link>
                </li>
                <li>
                    <Link href="/my-profile">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
