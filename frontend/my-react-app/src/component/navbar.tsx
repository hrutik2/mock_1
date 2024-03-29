import React from "react";
import styled from "styled-components";

export const Navbar: React.FC = () => {
  return (
    <DIV>
      <div>
        <h1>Masai Forem</h1>
      </div>
      <div>
        <input />
      </div>
      <div>
        <img />
        <p>abc</p>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: hsla(210, 16%, 18%, 1);

  div {
    padding: 10px;
    display: flex;
  }

  div h1 {
    margin-top: 0px;
    font-family: "Source Sans Pro";
    font-size: 20px;
    font-weight: 700;
    color: hsla(16, 100%, 55%, 1);
  }

  div input {
    width: 400px;
  }

  div img {
    width: 30px;
  }

  div p {
    margin-top: 0px;
    margin-left: 10px;
    font-family: "Source Sans Pro";
    font-size: 15px;
    font-weight: 700
  }`