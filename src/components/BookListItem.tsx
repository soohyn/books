import Button from "./Button";

interface BookListItemProps {
  title: string;
  author: string;
  price: number;
}

const BookListItem = ({ title, author, price }: BookListItemProps) => {
  return (
    <article>
      <h3>{title}</h3>
      <span aria-label="작가">{author}</span>
      <span>{price.toLocaleString()}원</span>
      <Button label='구매하기' />
      <Button label='상세보기' />
    </article>
  );
};

export default BookListItem;
