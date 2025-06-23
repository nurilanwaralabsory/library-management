// export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        // <AuthLayoutTemplate title={title} description={description} {...props}>
        //     {children}
        // </AuthLayoutTemplate>
        <main className="auth-container">
            <section className="auth-form bg-[url('/images/pattern.webp')]">
                <div className="auth-box">
                    <div className="flex flex-grow gap-3">
                        <img src="/icons/logo.svg" alt="logo" width={37} height={37} />
                        <h1 className="text-2xl font-semibold text-white">NFLibrary</h1>
                    </div>
                    <div>{children}</div>
                </div>
            </section>

            <section className="auth-illustration">
                <img src="/images/auth-illustration.png" alt="auth ilustration" height={1000} width={1000} className="size-full object-cover" />
            </section>
        </main>
    );
}
