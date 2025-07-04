export default function AppLogo() {
    return (
        <>
            <div className="flex">
                <img src="/icons/book-dashboard.png" alt="logo" width={40} height={40} />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">NFLibrary</span>
            </div>
        </>
    );
}
