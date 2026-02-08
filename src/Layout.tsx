import { Outlet } from "react-router";
import Header from "./components/Header";

function Layout() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <Header />
      <main className="flex w-full h-full max-w-240 ">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
