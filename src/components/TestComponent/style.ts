import styled, { css } from "styled-components";

export const Button = styled.button<{ primary?: boolean }>`
  background: red;
  color: white;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      background: blue;
      color: yellow;
    `}
`;
