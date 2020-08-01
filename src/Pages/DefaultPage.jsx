import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
` 

const DefaultPage = ({ children }) => {
    return(
        <>
            <Menu />
            <Main>
                { children } 
            </Main>
            <Footer />
        </>
    )
}

export default DefaultPage