import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="mt-[100px] h-full p-4 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
