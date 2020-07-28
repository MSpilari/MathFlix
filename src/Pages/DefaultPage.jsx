import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const DefaultPage = ({ children }) => {
    return(
        <>
            <Menu />
            { children } 
            <Footer />
        </>
    )
}

export default DefaultPage