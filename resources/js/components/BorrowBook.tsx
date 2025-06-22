import { Button } from './ui/button';

const BorrowBook = () => {
    return (
        <Button className="book-overview_btn">
            <img src="/icons/book.svg" alt="book" width={23} height={23} />
            <p className="font-BebasNeue text-xl text-dark-100">Borrow Book</p>
        </Button>
    );
};

export default BorrowBook;
