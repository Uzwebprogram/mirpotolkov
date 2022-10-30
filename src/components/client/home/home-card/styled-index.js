import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
`;

export const CardList = styled.ul`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li:nth-child(2){
    div{
        margin-top: -69px;
    }
  }
`;

export const CardItem = styled.li`
  display: flex;
  align-items: top;
  justify-content: top;
  flex-direction: column;

  img {
    margin: 0 auto !important;
  }
`;

export const CardImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.div`
  width: 100%;
  h4 {
    font-size: 30px;
    margin: 0 0 20px 0;
    font-weight: 400;
    text-align: center;
    color: #224066;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
    color: #224066;
    display: flex;
    align-items: center;

    i{
        font-size: 35px;
        color:#d4665c;
        font-weight: bold;
        margin: 0 5px 0 40px;
    }
  }
`;
