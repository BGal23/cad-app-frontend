import { DefaultTheme } from "styled-components";
import colors from "../assets/colors";

export const lightTheme: DefaultTheme = {
  name: "light",
  colors: {
    ...colors.light,
    ...colors.static,
  },
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  colors: {
    ...colors.dark,
    ...colors.static,
  },
};
