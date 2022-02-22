import styled from "styled-components";

export const CardContainer = styled.div`
  .side {
    width: 45%;

    div {
    }
  }
  width: 48%;
  color: white;
  background: lightGray;
  margin: 10px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  font-weight: bold;
  @media screen and (max-width: 865px) {
    width: 80%;
    padding: 15px;
    flex-direction: column;
    align-items: baseline;
    height: auto;
  }
`;
