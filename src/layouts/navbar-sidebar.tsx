import { FC } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import MainContent from "../components/main-content";

const NavbarSidebarLayout: FC = function () {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent />
    </>
  );
};


export default NavbarSidebarLayout;
