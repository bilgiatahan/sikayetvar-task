import styled from "styled-components";
import { device } from '../../Device'

export const ScUserDetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.88rem 0 3.75rem;
  border-bottom: 1px solid #E9ECEF;
  @media ${device.mobileL} {
    padding-bottom: 2rem;
  }
`

export const ScUserDetailContentWrapper = styled.div`
  display: flex;
  margin-top: 1.6rem;
  gap: 1.5rem;
`

export const ScUserDetailLocationWrapper = styled.div`
  position: relative;
  width: 485px;
  @media ${device.mobileL} {
    padding-top: 2rem;
  }
  img{
    max-width: 100%;
    &.maps{
      border-radius: 4px;
    }
    &.marker{
      position: absolute;
      z-index: 9999;
      top: 30%;
      left: 50%;
    }
  }
`

export const ScNameWrapper = styled.h2`
  color: #32325D;
  font-size: 1.75rem;
  font-weight: 400;
  user-select: none;
`

export const ScCityWrapper = styled.small`
  color: #32325D;
  margin-top: .32rem;
`

export const ScUserInfoLabel = styled.div`
  font-size: .88rem;
  color:#ADB5BD;
  line-height: 26px;
`

export const ScUserInfo = styled.div`
  font-size: 1rem;
  font-weight: 550;
  color:#525F7F;
  line-height: 26px;
  &.website{
    color: #4383cd;
  }
`

export const ScUserDetailFooter = styled.footer`
  padding: 3.75rem 0 3rem;
  text-align: center;
  a.showMore{
    font-size: 1rem;
    color: #4A90E2;
  }
`

export const ScUserDetailFooterText = styled.p`
  max-width: 821px;
  font-size: 1rem;
  line-height: 27px;
  margin: 0 auto 1.25rem;
  color:#525F7F;
`

export const ScLinkWrapper = styled.a`
  font-size: 1rem;
  color: #4A90E2;
  cursor: pointer;
  &:hover{
    color: #0a6bdd;
  }
`