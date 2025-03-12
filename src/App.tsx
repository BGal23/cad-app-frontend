import { Route, Routes } from "react-router-dom";
import Shared from "./layouts/Shared/Shared";
import { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/globalStyle";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const Create = lazy(() => import("./pages/Create/Create"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const App = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
