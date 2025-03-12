import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease-in-out;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMenuWrapper = styled(StyledHeaderWrapper)`
  gap: 1em;
`;
