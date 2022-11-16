import styled from "styled-components";

export const Wrapper = styled.div`

img{
    width: 100%;
}
h2{
    font-size: 46px;
      color: #224066;
      text-align: left;
      font-weight: 200;
}
`
export const WrapperContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  z-index: 10000;
  @media only screen and (max-width:768px) {
    width: 90%;
  }
`