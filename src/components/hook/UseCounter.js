import { useState } from "react"

export const UseCounter = (initialState) => {

    const [count , setCount] = useState(initialState || 0)

    const incrementHandler = () => {
        setCount(count + 1)
      }
    
      const decrementHandler = () => {
        if(count > 0){
          setCount(count - 1)
        }
      }

      return {
        count,
        incrementHandler,
        decrementHandler
      }

}