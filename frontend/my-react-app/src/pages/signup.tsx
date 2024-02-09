import React from "react";
import { Dive, LoginDiv } from "./login";

export const Sigup: React.FC = () => {
  return (
    <LoginDiv>
      <Dive>
        <h1 style={{ textAlign: "center" }}>signup</h1>
        <form>
          <label>userName</label>
          <br></br>
          <input placeholder="userName"></input>
          <br></br>
          <label>avatar</label>
          <br></br>
          <input placeholder="userimg"></input>
          <br></br>
          <label>Login</label>
          <br></br>
          <input placeholder="Email"></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input placeholder="Password"></input>
          <button type="submit">Sign up</button>
        </form>
      </Dive>
    </LoginDiv>
  );
};
