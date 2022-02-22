import styled from "styled-components";
import Img from "../../Assets/Img/planodefundo.jpeg";

export const Container = styled.div`
  background-image: url(${Img});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  color: white;

  h1 {
    margin: 0 auto;
    padding-top: 30px;
  }
  .access {
    margin-top: 60px;
    font-size: 25px;
    display: flex;
    flex-direction: column;

    button {
      margin: 15px auto;
      border: 2px solid #00000026;
      background: rgba(48, 255, 0, 0.2);
      color: white;

      width: 100px;
      height: 50px;
      border-radius: 3px;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        background: rgba(48, 255, 0, 0.5);
      }
    }
    .logout {
      background: rgba(255, 0, 0, 0.2);
      &:hover {
        background: rgba(255, 0, 0, 0.5);
      }
    }
  }
`;
