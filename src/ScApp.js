import Styled from "styled-components";
import mainBg from "./assests/img/bg.svg"
import {device} from "./Device"

export const ScMainWrapper = Styled.main`
  width:100%;
  min-height: 100vh;
  background-image: url(${mainBg});
  background-size: contain;
  background-position: center 0;
  background-repeat: no-repeat;
  @media ${device.tablet} {
    padding 0 1rem;
  }
`
export const ScMainContainer = Styled.div`
  max-width: 1014px;
  margin: 0 auto;
`