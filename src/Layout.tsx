import { Outlet } from "react-router";
import Header from "./components/Header";

function Layout() {
  return (
    <div className="flex flex-col bg-red-100 items-center">
      <Header />
      <main className="w-full max-w-240 bg-blue-100">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
