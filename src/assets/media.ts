import { css } from "styled-components";

const breakpoints = {
  mobile: "480px",
  largeMobile: "576px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
  largeDesktop: "1440px",
};

const media = {
  mobile: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
  largeMobile: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.largeMobile}) {
      ${styles}
    }
  `,
  tablet: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  laptop: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.laptop}) {
      ${styles}
    }
  `,
  desktop: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${styles}
    }
  `,
  largeDesktop: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.largeDesktop}) {
      ${styles}
    }
  `,
};

export default media;
