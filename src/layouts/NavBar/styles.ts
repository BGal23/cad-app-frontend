import { NavLink } from "react-router-dom";
import styled from "styled-components";
import media from "../../assets/media";

export const StyledNavBarWrapper = styled.div`
  display: none;

  ${media.largeMobile`
    justify-content: space-between;
    gap: 1em;
    display: flex;
  `}
`;

// export const StyledNavBarContainer = styled.div``;

export const StyledMenuIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.largeMobile`
    display: none;
    
  `}
`;

export const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;
