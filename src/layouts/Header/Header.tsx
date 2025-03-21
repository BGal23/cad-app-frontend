import ThemeModeButton from "../../components/Buttons/ThemeModeButton/ThemeModeButton";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { StyledHeader, StyledHeaderWrapper, StyledMenuWrapper } from "./styles";
import Headroom from "react-headroom";
import LanguageSwitcher from "../../components/Buttons/LanguageSwitcher/LanguageSwitcher";
import LoginButton from "../../components/Buttons/LoginButton/LoginButton";

const Header = () => {
  return (
    <Headroom>
      <StyledHeader>
        <Container>
          <StyledHeaderWrapper>
            <Logo />
            <StyledMenuWrapper>
              <NavBar />
              <ThemeModeButton />
              <LanguageSwitcher />
              <LoginButton />
            </StyledMenuWrapper>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
    </Headroom>
  );
};

export default Header;
