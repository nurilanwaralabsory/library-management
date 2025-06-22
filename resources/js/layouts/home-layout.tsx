import Header from '@/components/Header';

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="root-container bg-[url('/images/pattern.webp')]">
            <div className="mx-auto max-w-7xl">
                <Header />
                <div className="mt-20 pb-20">{children}</div>
            </div>
        </div>
    );
}
