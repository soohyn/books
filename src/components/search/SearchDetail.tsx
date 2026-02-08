import type { ChangeEvent, Dispatch, SetStateAction, SubmitEvent } from "react";
import Button from "../Button";

interface SearchDetailProps {
  inputValue: string;
  selectValue: Target | null;
  isOpenDetailSearch: boolean;
  setSelectValue: Dispatch<SetStateAction<Target | null>>;
  handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  handleChangeinputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOpenDetailSearch: () => void;
}

const SearchDetail = ({
  inputValue,
  selectValue,
  isOpenDetailSearch,
  setSelectValue,
  handleSubmit,
  handleChangeinputValue,
  handleOpenDetailSearch,
}: SearchDetailProps) => {
  return (
    <>
      <button type="button" onClick={handleOpenDetailSearch}>
        상세검색
      </button>
      {isOpenDetailSearch && (
        <form onSubmit={handleSubmit}>
          <select
            name="target"
            aria-label="상세 검색 항목"
            value={selectValue ?? undefined}
            onChange={(e) => setSelectValue(e.target.value as Target)}
          >
            <option value="title">제목</option>
            <option value="person">저자명</option>
            <option value="publisher">출판사</option>
          </select>
          <input
            name="query"
            placeholder="검색어 입력"
            aria-label="상세 검색어"
            value={inputValue}
            onChange={handleChangeinputValue}
          />
          <Button type="submit" label="검색하기" aria-label="상세 검색하기" />
        </form>
      )}
    </>
  );
};

export default SearchDetail;
