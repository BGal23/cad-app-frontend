import { Route, Routes } from "react-router-dom";
import Shared from "./layouts/Shared/Shared";
import { lazy } from "react";

const About = lazy(() => import("./pages/About/About"));
const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
