import { Dialog, List, ListItem } from "@mui/material";
import { StyledCloseButton, StyledDrawerWrapper, StyledLink } from "./styles";
import { Props } from "./types";
import navList from "../../assets/constants/navList";
import { IoMdClose } from "react-icons/io";

const DrawerBar: React.FC<Props> = ({
  isOpenDrawerBar,
  setIsOpenDrawerBar,
}) => {
  return (
    <>
      <Dialog open={isOpenDrawerBar} onClick={() => setIsOpenDrawerBar(false)}>
        <StyledDrawerWrapper>
          <List>
            {navList.map((element) => (
              <ListItem key={element.id}>
                <StyledLink to={element.address}>{element.name}</StyledLink>
              </ListItem>
            ))}
          </List>
          <StyledCloseButton onClick={() => setIsOpenDrawerBar(false)}>
            <IoMdClose size={"1.6em"} />
          </StyledCloseButton>
        </StyledDrawerWrapper>
      </Dialog>
    </>
  );
};

export default DrawerBar;
