import styled from "styled-components";
import media from "../../assets/media";

export const StyledContainer = styled.div`
  margin: 0 10px 0;
  width: calc(100% - 20px);

  ${media.mobile`
    margin: 0 15px 0;
    width: calc(100% - 30px);
  `}

  ${media.largeMobile`
    margin: 0 30px 0;
    width: calc(100% - 60px);
  `}

  ${media.tablet`
    margin: 0 auto 0;
    width: 700px;
  `}

  ${media.laptop`
    width: 960px;
  `}

  ${media.desktop`
    width: 1200px;
  `}
  
  ${media.largeDesktop`
    width: 1360px`}
`;
