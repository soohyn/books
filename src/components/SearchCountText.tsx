interface SearchCountTextProps {
  count: number;
}

const SearchCountText = ({ count }: SearchCountTextProps) => {
  return (
    <section>
      <span>도서 검색 결과</span>
      <span>
        총<strong>{count}</strong>건
      </span>
    </section>
  );
};

export default SearchCountText;
