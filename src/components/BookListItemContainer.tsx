import { useState } from "react";
import BookListItemDetail from "./BookListItemDetail";
import BookListItem from "./BookListItem";

interface BookListItemContainerProps {
  item: Document;
  isLike: boolean;
  handleClickLike: (item: string) => void;
}

const BookListItemContainer = ({
  item,
  isLike,
  handleClickLike,
}: BookListItemContainerProps) => {
  const [isDetail, setIsDetail] = useState(false);

  const handleClickDetail = () => {
    setIsDetail((prev) => !prev);
  };

  if (isDetail) {
    return (
      <BookListItemDetail
        title={item.title}
        author={item.authors.join(", ")}
        price={item.price}
        salePrice={item.sale_price}
        contents={item.contents}
        isLike={isLike}
        thumbnail={item.thumbnail}
        onClickLike={handleClickLike}
      />
    );
  }

  return (
    <BookListItem
      title={item.title}
      author={item.authors.join(", ")}
      price={item.sale_price}
      thumbnail={item.thumbnail}
      handleClickDetail={handleClickDetail}
    />
  );
};

export default BookListItemContainer;
