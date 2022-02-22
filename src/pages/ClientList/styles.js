import styled from "styled-components";
import Img from "../../Assets/Img/planodefundo.jpeg";

export const Container = styled.div`
  width: 100%;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;

  h1 {
    padding: 30px 0;
    color: white;
  }

  button {
    margin: 15px auto;
    border: 2px solid #00000026;
    background: rgba(240, 240, 240, 0.4);
    width: 150px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    &:hover {
      background: #00000026;
    }
  }
`;
