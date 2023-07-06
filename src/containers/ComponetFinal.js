import React, { createContext } from 'react'
import ComA from './ComA'

const FirstName=createContext();
const LastName=createContext();

const ComponetFinal = () => {
  return (
    <div>
        <FirstName.Provider value={"Malvika"}>
            <LastName.Provider value={"Choksi"}>
                    <ComA/>

            </LastName.Provider>
            
        </FirstName.Provider>
    </div>
  )
}

export default ComponetFinal
export {FirstName,LastName}