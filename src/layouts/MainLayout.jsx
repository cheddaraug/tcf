import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      {/* !  Might break something - sticky footer*/}
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="font-secondary lg:pt-18  pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
