import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();

  const getNavItemStyle = (to: string) => {
    return `pb-2 border-b-1 ${pathname === to ? "border-palette-primary" : "border-transparent"}`;
  };

  return (
    <header className="w-full py-6 px-4">
      <div className="flex flex-row w-full max-w-300 mx-auto items-center">
        <Link to="/">
          <h1 className="typo-title typo-title-1 self-start">CERTICOS BOOKS</h1>
        </Link>
        <nav aria-label="메인 메뉴" className="mx-auto">
          <ul className="flex flex-row gap-14">
            <li>
              <Link to="/search" className={getNavItemStyle("/search")}>
                도서 검색
              </Link>
            </li>
            <li>
              <Link to="/like" className={getNavItemStyle("/like")}>
                내가 찜한 책
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
