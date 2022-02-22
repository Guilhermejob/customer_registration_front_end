import styled from "styled-components";
import Img from "../../Assets/Img/planodefundo.jpeg";

export const Container = styled.div`
  background-image: url(${Img});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 30px;

  button {
    margin: 15px auto;
    border: 2px solid #00000026;
    background: rgba(255, 0, 0, 0.2);
    width: 100px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: rgba(255, 0, 0, 0.5);
    }
  }
  @media screen and (max-width: 865px) {
    height: auto;
    overflow: hidden;
  }
`;
export const FormContainer = styled.form`
  width: 60%;
  height: 90%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 10px;
  backdrop-filter: blur(28px);
  border: 1px solid #00000026;
  padding: 20px;

  input {
    width: 80%;
    padding: 10px 15px;
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

  button {
    margin: 15px auto;
    border: 2px solid #00000026;
    background: none;
    width: 100px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: #00000026;
    }
  }

  @media screen and (max-width: 865px) {
    width: 90%;,
    height: auto;
    overflow:hidden;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 45%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    div {
      display: flex;
      align-items: flex-start;
      color: white;

      span {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 865px) {
    width: 90%;
    height: auto;
    flex-direction: column;
  }
`;
