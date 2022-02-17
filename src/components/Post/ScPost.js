import Styled from "styled-components";
import { device } from "../../Device"

export const ScPost = Styled.div`
  display: flex;
  align-items: center;
  padding: 1.75rem 0;
  gap: .625rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media ${device.mobileL} {
    display: block;
    text-align: center;
  }
`

export const ScPostId = Styled.div`
  font-size: .88rem;
  font-weight: bold;  
  color:#525F7F;
  @media ${device.mobileL} {
    display: inline-block;
  }
  `

export const ScPostTitle = Styled.div`
  font-size: .88rem;
  color:#32325D;
  @media ${device.mobileL} {
    max-width:  320px;
    display: inline-block;
    margin-left: .5rem;
  }
`

export const ScActionWrapper = Styled.div`
  margin-left:auto;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  @media ${device.mobileL} {
    margin-top: 1rem;
    justify-content: center;
  }
`
export const ScActionButtonWrapper = Styled.div`
  border-top: 1px solid #ddd;
`

export const ScActionButton = Styled.button`
  padding: .75rem 1.32rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
  border-radius: 3px;
  border: none;
  font-size : .88rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &.detail{
    background: rgba(94, 114, 228, 1);
    &:hover{
      background: rgb(81 97 192);
    }
  }
  &.update{
    background: rgba(45, 206, 137, 1);
    &:hover{
      background: rgb(41 192 127);
    }
  }
  &.delete{
    background: rgba(251, 99, 64, 1);
    &:hover{
      background: rgb(226 87 55);;
    }
  }
  &.popup-Edit{
    display: block;
    margin: 1.5rem 0 1.5rem 1.5rem;
    background: #11CDEF;
    &:hover{
      background: #0fc2e3;
    }
  }
  &.popup-Delete{
    display: block;
    margin: 1.5rem 1.5rem 1.5rem auto;
    background: rgba(251, 99, 64, 1);
    &:hover{
      background: rgb(226 87 55);;
    }
  }
  a{
    color: #fff;
    text-decoration: none;
  }
`

export const ScPaginationWrapper = Styled.div`
  margin-top: 2rem;  
  margin-bottom: 11.2rem;
  nav{
    ul{
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: flex-end;
      li{
        border: 1px solid #ccc;
        background-color: #fff;
        color:#00cdac;
        button{
          cursor: pointer;
          font-size: .88rem;
          padding: .5rem;
          background-color: transparent ;
          border:none;
          color:inherit;
        }
        :hover{
          background-color: #00cdac;
          color:#fff;
        }
      }
    }
  }

`

export const ScPopup = Styled.div`
  width: 500px;
  background-color: #fff;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 50%;
  margin-top: 10rem;
  transform : translateX(-270px);
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  
`

export const ScPopupHeader = Styled.header`
  padding: 1.25rem;
  border-bottom: 1px solid #E9ECEF;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ScPopupCloseButton = Styled.button`
  background: transparent ;
  border: none;
  font-size: .88rem;
  color: #525F7F;
  cursor: pointer;
`

export const ScPopupHeaderTitle = Styled.h4`
  font-size: 1rem;
  color: #32325D;
  font-weight: 400;
  user-select: none;
`

export const ScUpdateForm = Styled.form`
  padding: 1.6rem 2.25rem 1.6rem 1.5rem; 
  border-bottom : 1px solid #E9ECEF;
`

export const ScUpdateFormLabel = Styled.label`
  font-size: .88rem;
  color:#525F7F;
  font-weight: 550;
  display:block;
  margin-bottom: .625rem;
`

export const ScUpdateFormInput = Styled.input`
  width: 100%;
  padding: .75rem;
  border: 1px solid #CAD1D7;
  border-radius: 4px;
  margin-bottom: .94rem;
  &::placeholder{
  font-size: .88rem;
  color: #8898AA;
  }
  &:focus{
    outline: none;
    box-shadow: 0px 0px 5px rgba(17, 205, 239, .5);
  }
`

export const ScUpdateFormTextArea = Styled.textarea`
  min-width: 440px;
  height: 102px;
  border: 1px solid #CAD1D7;
  border-radius: 4px;
  padding: .75rem .5rem .75rem .75rem;
  resize: none;
  &::placeholder{
    font-size: .88rem;
    color: #8898AA;
  }
  &:focus{
    outline: none;
    box-shadow: 0px 0px 5px rgba(17, 205, 239, .5);
  }
`

export const ScPopupWarningTextWrapper = Styled.div`
  padding: 2.25rem ; 
  text-align: center;
  color: #525F7F;
  border-bottom : 1px solid #E9ECEF;
`

export const ScPopupWarningText = Styled.h3`
  margin-bottom: .5rem;
  user-select: none;
`

export const ScPopupWarningSubText = Styled.h4`
  color:#8898AA;
  user-select: none;
`