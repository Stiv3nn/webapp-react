// IMPORTO L'OUTLET DI MODULE REACT-DOM
import { Outlet } from "react-router-dom";

// IMPORT L'HEADER
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
