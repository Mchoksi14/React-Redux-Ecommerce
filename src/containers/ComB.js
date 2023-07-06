import React, { useContext } from 'react'
import ComC from './ComC'
import { FirstName, LastName } from './ComponetFinal'

const ComB = () => {

    const fname=useContext(FirstName);
    const lname=useContext(LastName);
  return (
    <div>
      {/* comb */}
<h1> Only Name {fname},{lname}</h1>
      <ComC/>
    </div>
  )
}

export default ComB
