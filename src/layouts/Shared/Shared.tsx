import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../../components/Container/Container";

const Shared = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Footer />
    </>
  );
};

export default Shared;
