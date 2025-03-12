import navList from "../../assets/constants/navList";
import DrawerBar from "../DrawerBar/DrawerBar";
import { StyledLink, StyledMenuIcon, StyledNavBarWrapper } from "./styles";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [isOpenDrawerBar, setIsOpenDrawerBar] = useState(false);

  return (
    <>
      <StyledNavBarWrapper>
        {navList.map((element) => (
          <StyledLink key={element.id} to={element.address}>
            {element.name}
          </StyledLink>
        ))}
      </StyledNavBarWrapper>
      <StyledMenuIcon onClick={() => setIsOpenDrawerBar(true)}>
        <IoMenu size={"1.6em"} />
      </StyledMenuIcon>
      <DrawerBar
        isOpenDrawerBar={isOpenDrawerBar}
        setIsOpenDrawerBar={setIsOpenDrawerBar}
      />
    </>
  );
};

export default NavBar;
