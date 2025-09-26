import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "../components/Analytics";

const SiteLayout = () => {
  return (
    <div className="site-layout">
      <Analytics />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
