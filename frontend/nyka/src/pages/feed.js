import React from "react";
import styled from "styled-components";

export const Feed = () => {
  return (
    <DIV>
      <FilterSidebar>
        <P>Filter Posts</P>
        <div>
          <input type="checkbox"  />
          <Span>Development</Span>
          <br />
          <input type="checkbox" />
          <Span>Design</Span>
          <br />
          <input type="checkbox" />
          <Span>Innovation</Span>
          <br />
          <input type="checkbox" />
          <Span>Tutorial</Span>
          <br />
          <input type="checkbox" />
          <Span>Bussiness</Span>
          <br />
        </div>
      </FilterSidebar>
      <AllPost>
        <button>Create Post</button>
      </AllPost>
    </DIV>
  );
};

const DIV= styled.div`
  width: 100%;
  padding:10px;
  background-color: hsla(208, 18%, 14%, 1);
  display: flex;
`;

const FilterSidebar = styled.div`
  width: 20%;
  margin-right: 20px;
  background-color: hsla(210, 16%, 18%, 1);
  padding: 16px;
  border-radius: 4px;
`;

const P = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: hsla(0, 0%, 97%, 1);
`;

const AllPost = styled.div`
  width: 79.80%;

  button {
    
    width: 120px;
    height: 30px;
    border-radius: 6px;
    padding: 1px;
    margin-bottom: 20px;
    background-color: hsla(16, 100%, 60%, 1);
    color: white;
  }
`;
const Span=styled.span`
color:white;
margin-left:10px
`

