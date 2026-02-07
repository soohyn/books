import Fill from "../assets/fill.svg";
import Like from "../assets/line.svg";

interface BookListItemDetailProps {
  title: string;
  thumbnail: string;
  contents: string;
  author: string;
  price: number;
  salePrice: number;
  isLike: boolean;
  onClickLike: (item: string) => void;
}

const BookListItemDetail = ({
  title,
  thumbnail,
  contents,
  author,
  price,
  salePrice,
  isLike,
  onClickLike,
}: BookListItemDetailProps) => {
  return (
    <article>
      <img src={thumbnail} alt={title} aria-hidden={true} />
      <button onClick={() => onClickLike(title)}>
        <img src={isLike ? Fill : Like} />
      </button>
      <h3>{title}</h3>
      <span>{author}</span>
      <p>{contents}</p>
      <span>원가 {price}</span>
      {salePrice && <span>할인가 {salePrice}</span>}
    </article>
  );
};

export default BookListItemDetail;
