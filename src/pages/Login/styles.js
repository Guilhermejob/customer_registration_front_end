import styled from "styled-components";
import Img from "../../Assets/Img/planodefundo.jpeg";

export const Container = styled.div`
  background-image: url(${Img});
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;

  button {
    margin: 15px auto;
    border: 2px solid #00000026;
    background: rgba(240, 240, 240, 0.4);
    width: 100px;
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
export const FormContainer = styled.form`
  width: 70%;
  height: 80%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 10px;
  backdrop-filter: blur(28px);
  border: 1px solid #00000026;
  padding: 20px;

  .containerButtons {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 100%;
    padding: 15px;
    background: none;
    color: white;
    border: 1px solid black;
    border-radius: 3px;

    ::-webkit-input-placeholder {
      color: white;
      font-weight: bold;
    }
  }
  h2 {
    color: white;
  }
  @media screen and (max-width: 865px) {
    width: 90%;
  }
`;

export const FormSection = styled.div`
  display: flex;
  width: 50%;
  height: 45%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 865px) {
    width: 90%;
  }
`;
