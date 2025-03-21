import styled from "styled-components";

export const MainContainer = styled.div`
  height: 300px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
`;
