import styled from "styled-components";

export const ScPostDetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 1.88rem 0 3.75rem;
  border-bottom: 1px solid #E9ECEF;
`

export const ScPostDetailUserNameWrapper = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #E9ECEF;
  display: flex;
  align-items: center;
  gap: 1rem;
  img{
    border-radius: 50%;
    background: #32325D;
  }
  a{
    font-weight: 400;
    text-decoration: none;
    color: #32325D;
    font-size: 1.75rem;
    &:hover{
      color: #6161b1;
    }
  }
`

export const ScPostDetailLabel = styled.div`
  color: #525F7F;
  font-size: 1rem;
  font-weight: 550;
  padding-bottom: .4rem;
  user-select: none;
`

export const ScPostDetailText = styled.p`
  font-size: .88rem;
  margin-bottom: 2rem;
  padding-left: .25rem;
  color: #32325D;
`