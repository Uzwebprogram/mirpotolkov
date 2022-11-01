import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  padding:0 0 180px 0;

  div{
    h2{
        font-size: 46px;
        color: #224066;
        font-weight: 200;

        span{
            font-weight: bold;
        }
    }
  }
`;

export const AdvantageCardWrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

export const AdvantageCard = styled.div`
  width: 25%;
  padding: 0 10px;

  p{
    margin: 10px 40px 0 25px;
    font-size: 20px;
    font-weight: bold;
    color: #224066;
  }
`;
