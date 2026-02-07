import { useEffect, useState } from "react";
import BookListItem from "../components/BookListItem";
import SearchBox from "../components/SearchBox";
import SearchCountText from "../components/SearchCountText";
import { useQuery } from "@tanstack/react-query";
import { requestBooks } from "../api/book";
import NoData from "../components/NoData";

const SEARCH_HISTORY_KEY = "search-history";

const getStorageHistory = () => {
  const storageData: string = localStorage.getItem(SEARCH_HISTORY_KEY) ?? "";

  return JSON.parse(storageData);
};

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchHistory, setSearchHistory] =
    useState<string[]>(getStorageHistory);

  const { data } = useQuery({
    queryKey: ["books", searchQuery],
    queryFn: () => requestBooks({ query: searchQuery }),
  });

  const setStorageHistory = (searchHistory: string[]) => {
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory));
  };

  const addSearchHistory = (searchQuery: string) => {
    setSearchHistory((prev) => {
      const newHistory = prev.filter((item) => item !== searchQuery);

      if (newHistory.length >= 8) {
        return [...newHistory.slice(0, 1), searchQuery];
      } else {
        return [...newHistory, searchQuery];
      }
    });
  };

  const deleteSearchHistory = (deleteItem: string) => {
    setSearchHistory((prev) => prev.filter((item) => item !== deleteItem));
  };

  const handleOnSearch = () => {
    setSearchQuery(inputValue);
    addSearchHistory(inputValue);
  };

  const handleClickHistory = (history: string) => {
    setInputValue(history);
    setSearchQuery(history);
  };

  useEffect(() => {
    setStorageHistory(searchHistory);
  }, [searchHistory]);

  return (
    <main>
      <section>
        <h1>Search</h1>
        <SearchBox
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSearch={handleOnSearch}
        />
        {searchHistory.reverse().map((item, index) => {
          return (
            <div key={item + index}>
              <span onClick={() => handleClickHistory(item)}>{item}</span>
              <button
                onClick={() => {
                  deleteSearchHistory(item);
                }}
              >
                x
              </button>
            </div>
          );
        })}
        <SearchCountText count={data?.meta.total_count ?? 0} />
        {(data?.meta.total_count ?? 0 > 0) ? (
          data?.documents.map((item, index) => {
            return (
              <BookListItem
                key={item.title + index}
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
