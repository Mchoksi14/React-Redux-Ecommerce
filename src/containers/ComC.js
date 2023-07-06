import React from 'react'
import { FirstName, LastName } from './ComponetFinal'

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {
                    (fname) => {
                        return (

                            <LastName.Consumer>
                                {
                                    (lname) => {
                                        return <h1>My Name is  {fname} {lname} </h1>
                                    }
                                }

                            </LastName.Consumer>
                        )

                        // return <h1>
                        //     My Name is {fname}
                        // </h1>
                    }
                }

            </FirstName.Consumer>
        </>
    )
}

export default ComC