import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <h1>CERTICOS BOOKS</h1>
      <nav aria-label="메인 메뉴">
        <ul>
          <li>
            <Link to="/search">도서 검색</Link>
          </li>
          <li>
            <Link to="/like">내가 찜한 책</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
