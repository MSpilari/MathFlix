import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import DefaultPage from '../Pages/DefaultPage'
import FormVideo from '../components/Form/FormVideo'

const LinkStyled = styled(Link)`
   margin: 30px 0 0 5%;
   padding:50px 0;
`

const RegisterVideo = () => {
    return(
        <DefaultPage>
            <LinkStyled to='/cadastro/category'>
                Cadastrar Categoria
            </LinkStyled>
            <FormVideo />
        </DefaultPage>
    )
}

export default RegisterVideo