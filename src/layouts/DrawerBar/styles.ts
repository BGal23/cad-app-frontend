import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledDrawerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;

export const StyledCloseButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  padding: 5px;
`;
