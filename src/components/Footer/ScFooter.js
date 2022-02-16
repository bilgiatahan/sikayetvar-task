import Styled from "styled-components";
import {device} from "../../Device";

export const ScFooter = Styled.footer`
  position: relative;
  max-width: 1014px;
  width:100%;
  margin-top: 200px;
`

export const ScContent = Styled.section`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

`

export const ScContentTitle = Styled.h3`
  color: #00CDAC;
  font-size: 1.5rem;
  font-weight: 400;
`

export const ScContentSubTitle = Styled.h4`
  margin-top: 1rem;
  font-size: 1.38rem;
  font-weight: 400;
  color: #32325D;

`

export const ScContentSocialMedia = Styled.div`
  display:flex;
  align-items:center;
  margin-left: auto;
  gap: .75rem;
  padding-right: 2.5rem;
  @media ${device.mobileL} {
    margin: 3rem auto 0;
  }
`

export const ScSocialMediaLinkWrapper = Styled.div`
position: relative;
  background-color: #000;
  border-radius: 4px;
  padding: .75rem;
  width: 2.5rem;
  height: 2.5rem;
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 4px rgba(0, 0, 0, 0.08);
  text-align:center;
  &.facebook{
    background-color: rgba(59, 89, 153, 1);
  }
  &.twitter{
    background-color : rgba(29, 161, 242, 1);
  }
  &.dribble{
    background-color : rgba(234, 76, 137, 1);
  }
  &.github{
    background-color :rgba(34, 34, 34, 1);
  }
  a{
    width: 2.5rem;
    height: 2.5rem;
    img{
        width: 13px ;       
        height: 16px;
    }
  }
  
`

export const ScFollowPopupWrapper = Styled.div`  
  position: absolute;
  top:-100%;
  left: -40%;
  img{
    position: absolute;
    height: 12px;
    left: 35%;
  }
`

export const ScFollowText = Styled.div`
  user-select: none;
  width: 77px;
  padding: .5rem .625rem;
  border-radius: 4px;
  font-size: .8rem;
  background-color: rgba(33, 37, 41, 1);
  color: #fff;
  text-align:center;
`

export const ScCopyright = Styled.section`
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.35rem .5rem 3.32rem;
`

export const ScCopyrightText = Styled.div`
  user-select: none;
  font-size: .88rem;
  color: #525F7F;
  font-weight: bold;
  `

export const ScLinkWrapper = Styled.div`
  a{
    font-size: .88rem;
    color: rgba(136, 152, 170, 1);
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: rgb(93 104 117);
    }
  }
`

export const ScCompanyTitle = Styled.span`
  color:#00cdac;
`