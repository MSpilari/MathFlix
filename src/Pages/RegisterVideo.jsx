import React from 'react'
import { Link } from 'react-router-dom'

import DefaultPage from '../Pages/DefaultPage'
import FormVideo from '../components/Form/FormVideo'

const RegisterVideo = () => {
    return(
        <DefaultPage>
            <Link to='/cadastro/category'>
                Cadastrar Categoria
            </Link>
            <FormVideo />
        </DefaultPage>
    )
}

export default RegisterVideo