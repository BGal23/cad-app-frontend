import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../../../store/theme/themeSlice";
import { RootState } from "../../../store/store";

const ThemeModeButton = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <StyledButton onClick={() => dispatch(toggleTheme())}>
      {themeMode === "light" ? (
        <FaMoon size={"1.4em"} />
      ) : (
        <FaSun size={"1.4em"} />
      )}
    </StyledButton>
  );
};

export default ThemeModeButton;
