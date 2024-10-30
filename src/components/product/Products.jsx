import React, { memo, useContext, useState } from "react";
import MainGlobalImage from "../../assets/images/MainGlobalImage.png";
import styled from "styled-components";
import Button from "../UI/Button";
import { Store } from "../../store";
import Meals from "../Meals/Meals";
import { UseCounter } from "../hook/UseCounter";

const Products = (props) => {

  const {count , decrementHandler , incrementHandler} = UseCounter()
  
  return (
    <GlobalProductContainer>
      <ParentContainer>
      <Button onClick={incrementHandler} >Increment</Button>
     <h1>{count}</h1>
     <Button onClick={decrementHandler} >Decrement</Button>
      {props.items.map((el) => {
        return (
          <Meals items={el} key={el.id} />
        );
      })}
      </ParentContainer>
    </GlobalProductContainer>
  );
};

export default memo(Products);

const GlobalProductContainer = styled.div`
  width: 100%;
  height: 1232px;
  background-image: url(${MainGlobalImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ParentContainer = styled.div`
  width: 80%;
  height: 900px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`
