import { StyledContainer } from "./styles";
import { Props } from "./types";

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
