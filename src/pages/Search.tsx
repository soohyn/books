import { useState } from "react";
import BookListItem from "../components/BookListItem";
import SearchBox from "../components/SearchBox";
import SearchCountText from "../components/SearchCountText";
import { useQuery } from "@tanstack/react-query";
import { requestBooks } from "../api/book";
import NoData from "../components/NoData";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["books", searchQuery],
    queryFn: () => requestBooks({ query: searchQuery }),
  });

  const handleOnSearch = () => {
    setSearchQuery(inputValue);
  };
  return (
    <main>
      <section>
        <h1>Search</h1>
        <SearchBox
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSearch={handleOnSearch}
        />
        <SearchCountText count={data?.meta.total_count ?? 0} />
        {(data?.meta.total_count ?? 0 > 0) ? (
          data?.documents.map((item) => {
            return (
              <BookListItem
                title={item.title}
                author={item.authors.join(", ")}
                price={item.sale_price}
              />
            );
          })
        ) : (
          <NoData />
        )}
      </section>
    </main>
  );
}

export default Search;
