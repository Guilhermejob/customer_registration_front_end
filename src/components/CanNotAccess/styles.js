import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;

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
`;
