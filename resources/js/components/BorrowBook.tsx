import { SharedData } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from './ui/dialog';
interface Props {
    bookId: string;
    title: string;
    eligibility: {
        isEligible: boolean;
        message: string;
    };
}

const BorrowBook = ({ bookId, eligibility, title }: Props) => {
    const { post, processing } = useForm({});
    const [open, setOpen] = useState(false);

    const page = usePage<SharedData>();
    const { auth } = page.props;

    const handleBorrow = () => {
        post(route('borrow-book', bookId), {
            preserveScroll: true,
            onSuccess: () => setOpen(false),
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {auth.user && auth.user.role === 'USER' ? (
                    <Button className="book-overview_btn" disabled={!eligibility.isEligible || processing}>
                        <img src="/icons/book.svg" alt="book" width={23} height={23} />
                        <p className="font-BebasNeue text-xl text-dark-100">
                            {eligibility.isEligible ? 'Request Peminjaman Buku' : eligibility.message}
                        </p>
                    </Button>
                ) : null}
            </DialogTrigger>
            <DialogContent className="border-none bg-dark-100 text-white">
                <DialogTitle>Apakah kamu yakin ingin meminjam buku ini?</DialogTitle>
                <DialogDescription className="text-light-100">
                    Kamu akan meminjam buku <span className="text-primary">{title}</span>. Admin akan memproses permintaan Kamu. Pastikan Kamu telah
                    membaca syarat dan ketentuan peminjaman buku.
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
                        className="cursor-pointer bg-primary text-dark-100 hover:bg-primary/90"
                        onClick={handleBorrow}
                    >
                        <button type="submit"> {processing && <LoaderCircle className="h-4 w-4 animate-spin" />} Konfirmasi </button>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BorrowBook;
