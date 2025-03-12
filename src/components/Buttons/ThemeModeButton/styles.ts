import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;
