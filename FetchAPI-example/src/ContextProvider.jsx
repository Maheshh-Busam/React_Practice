import React, { createContext, useState } from 'react'


const Context = createContext();

function ContextProvider( {children}) {

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{cart, setCart, count, setCount}}>
        {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}