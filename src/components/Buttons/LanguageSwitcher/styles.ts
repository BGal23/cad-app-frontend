import styled from "styled-components";

export const StyledButtonWrapper = styled.button`
  width: 2em;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;
