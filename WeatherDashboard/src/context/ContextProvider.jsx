import React, { useState } from 'react';
import Context from './Context';
const ContextProvider = ({children}) => {
    const [data,setData] = useState({});
    return(
        <Context.Provider value={{data,setData}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;