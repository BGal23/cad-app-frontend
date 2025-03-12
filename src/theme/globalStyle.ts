import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: ${({ theme }) => theme.colors.background};
    --text-color: ${({ theme }) => theme.colors.text};
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    transition: background-color 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
`;
