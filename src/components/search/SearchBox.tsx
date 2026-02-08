import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react";

import SearchInput from "./SearchInput";
import SearchDetail from "./SearchDetail";

interface SearchBoxProps {
  selectValue: Target | null;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setSelectValue: Dispatch<SetStateAction<Target | null>>;
  onSearch: () => void;
}

const SearchBox = ({
  inputValue,
  selectValue,
  setSelectValue,
  setInputValue,
  onSearch,
}: SearchBoxProps) => {
  const [isOpenDetailSearch, setIsOpenDetailSearch] = useState(false);

  const handleChangeinputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch();
  };

  const handleOpenDetailSearch = () => {
    setIsOpenDetailSearch((prev) => !prev);
    setInputValue("");
  };

  return (
    <section>
      <h3 className="typo-title typo-title-2 mb-7">도서 검색</h3>
      <SearchInput
        inputValue={inputValue}
        isOpenDetailSearch={isOpenDetailSearch}
        handleSubmit={handleSubmit}
        handleChangeinputValue={handleChangeinputValue}
      />

      <SearchDetail
        inputValue={inputValue}
        selectValue={selectValue ?? "title"}
        setSelectValue={setSelectValue}
        isOpenDetailSearch={isOpenDetailSearch}
        handleSubmit={handleSubmit}
        handleChangeinputValue={handleChangeinputValue}
        handleOpenDetailSearch={handleOpenDetailSearch}
      />
    </section>
  );
};

export default SearchBox;
