import './App.css';
import Header from './layout/Header';
import Products from './components/product/Products';
import Modal from './components/UI/Modal';
import { useCallback, useMemo, useState } from 'react';

import kuurdak from "./assets/images/kuurdak.png"
import beshbarmak from "./assets/images/beshbarmak.png"
import chuchuk from "./assets/images/chuchuk.png"
import byjy from "./assets/images/byjy.png"
import ash from "./assets/images/ash.png"
import Button from './components/UI/Button';
import { UseCounter } from './components/hook/UseCounter';
import Data from './components/data/Data';




function App() {

  const product = [
    {
      imageFood: `${kuurdak}`,
      titleFood: "Kuurdak",
      priceFood: 400,
      description: "кыргыз элинин эң сыйлуу тамактарынын бири.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${beshbarmak}`,
      titleFood: "Beshbarmak",
      priceFood: 800,
      description: "майда тууралган эттен жасалган кыргыздын эң сый тамагы.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${chuchuk}`,
      titleFood: "Chuchuk",
      priceFood: 750,
      description: "жылкынын эти, казы-карта, татымдар кошулуп жасалган азык.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${byjy}`,
      titleFood: "Byjy",
      priceFood: 630,
      description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${ash}`,
      titleFood: "Ash",
      priceFood: 400,
      description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
      amount: 1,
      id: Math.random().toString()
    },
  ]

  const [visibleModal , setVisibleModal] = useState(false)
  const [state , setState] = useState(false)

  const {count , incrementHandler , decrementHandler} = UseCounter(10)

  const changeStateModalHandler = () => {
    setVisibleModal(prevState => !prevState)
  }

  const stateChangeHandler = useCallback(() => {
    setState(true)
  } , [])


  let result = useMemo(() => {
    return product
  } , [])

  

  return (
    <div className="App">
     <Header modal={changeStateModalHandler} />
     <Button onClick={incrementHandler} >Increment</Button>
     <h1>{count}</h1>
     <Button onClick={decrementHandler} >Decrement</Button>
     {visibleModal && <Modal onClose={changeStateModalHandler} />}
     
      <Products test={stateChangeHandler} func={state} items={result} />
      <Data/>
    </div>
  );
}

export default App;



// Memo
// usememo
// useCallback