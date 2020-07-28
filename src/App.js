import React from 'react'
import DefaultPage from './Pages/DefaultPage'
import HomePage from './Pages/HomePage'


function App(){
    return(
        <>
            <DefaultPage children={ <HomePage />} />
        </>
    )
}

export default App