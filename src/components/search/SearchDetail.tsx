import type { ChangeEvent, Dispatch, SetStateAction, SubmitEvent } from "react";
import Button from "../Button";
import Close from "../../assets/Icon_close.svg";

interface SearchDetailProps {
  inputValue: string;
  selectValue: Target | null;
  isOpenDetailSearch: boolean;
  onSearch: (e: SubmitEvent<HTMLFormElement>) => void;
  setSelectValue: Dispatch<SetStateAction<Target | null>>;
  handleChangeinputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOpenDetailSearch: () => void;
}

const SearchDetail = ({
  inputValue,
  selectValue,
  isOpenDetailSearch,
  onSearch,
  setSelectValue,
  handleChangeinputValue,
  handleOpenDetailSearch,
}: SearchDetailProps) => {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(e);
  };
  return (
    <section className="relative">
      <button
        type="button"
        onClick={handleOpenDetailSearch}
        className=" py-1 px-2.5 rounded-lg border-text-subtitle border typo-body typo-body-2"
      >
        상세검색
      </button>
      {isOpenDetailSearch && (
        <form
          onSubmit={handleSubmit}
          className="absolute w-90 max-w-90 z-2 top-full -right-full flex flex-col p-4 mt-2 rounded-lg shadow-lg shadow-[#979797]/15 bg-palette-white"
        >
          <div role="group" className="flex flex-row gap-1">
            <button
              type="button"
              aria-label="close buton"
              className="absolute top-1 right-1 cursor-pointer"
              onClick={handleOpenDetailSearch}
            >
              <img src={Close} alt="" aria-hidden={true} className="w-5 h-5" />
            </button>
            <select
              name="target"
              aria-label="상세 검색 항목"
              className="w-25 min-w-25 p-2.5 border-b border-palette-gray"
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
              className="border-b border-palette-primary p-2.5 outline-none w-full"
              value={inputValue}
              onChange={handleChangeinputValue}
            />
          </div>
          <Button
            type="submit"
            label="검색하기"
            variant="primary"
            size="sm"
            aria-label="상세 검색하기"
            className="mt-3"
          />
        </form>
      )}
    </section>
  );
};

export default SearchDetail;
