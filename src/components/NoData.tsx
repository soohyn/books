import IconBook from "../assets/icon_book.png";

const NoData = () => {
  return (
    <section>
      <img src={IconBook} alt="" />
      <p>검색된 결과가 없습니다</p>
    </section>
  );
};

export default NoData;
