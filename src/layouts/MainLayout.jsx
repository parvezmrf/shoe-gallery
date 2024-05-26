import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CustomerStatus from "../components/CustomerStatus";
import Faq from "../components/home/Faq";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <CustomerStatus/>
      <Faq/>
      <Footer />
    </div>
  );
};

export default MainLayout;
