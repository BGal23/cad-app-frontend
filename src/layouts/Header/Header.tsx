import { MdAccountCircle } from "react-icons/md";
import ThemeModeButton from "../../components/Buttons/ThemeModeButton/ThemeModeButton";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { StyledHeader, StyledHeaderWrapper, StyledMenuWrapper } from "./styles";
import Headroom from "react-headroom";
import LanguageSwitcher from "../../components/Buttons/LanguageSwitcher/LanguageSwitcher";

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
              <MdAccountCircle size={"1.4em"} />
            </StyledMenuWrapper>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
    </Headroom>
  );
};

export default Header;
