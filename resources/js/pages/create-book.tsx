import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const CreateBook = () => {
    return (
        <AppLayout breadcrumbs={[{ title: 'Buat Buku', href: '/create-book' }]}>
            <Head title="Create Book" />
            Ini adalah halaman tambah buku
        </AppLayout>
    );
};

export default CreateBook;
