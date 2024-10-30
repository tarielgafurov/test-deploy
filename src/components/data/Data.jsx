import React, { useEffect, useState } from 'react'
import { UseFetch } from '../hook/UseFetch';

const Data = () => {
   
    const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
  };


export default Data
