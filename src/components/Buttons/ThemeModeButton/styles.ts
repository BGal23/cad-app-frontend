import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;
