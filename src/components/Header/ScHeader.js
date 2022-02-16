import Styled from "styled-components";
import {device} from "../../Device";

export const ScHeader = Styled.header`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3.1rem;
  padding: 2rem 0;
  background: transparent;
  @media ${device.mobileL} {
    gap: .5rem
  }
`
export const ScLogoWrapper = Styled.div`
  width: 162px;
  img{
    width: inherit;
  }
`

export const ScLink = Styled.div`
  a{
    font-size: .88rem;
    color: #fff;
    text-decoration: none;
    opacity: 0.95;
    &:hover{
      text-decoration: underline;
    }
  }
`

export const ScLogInButton = Styled.button`
  cursor: pointer;
  margin-left: auto;
  color: #5E72E4;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  min-width: 100px;
  padding: .75rem 0;
  font-size: .88rem;
  text-align:center;
  border:none;
  &:hover{
    background-color: #f5f5f5;
  }
  @media ${device.mobileL} {
    margin: 0;
  }
`