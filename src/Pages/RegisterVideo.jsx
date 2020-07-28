import React from 'react'
import DefaultPage from '../Pages/DefaultPage'
import { Link } from 'react-router-dom'

const RegisterVideo = () => {
    return(
        <DefaultPage>
            <h1>Formulário de Registro</h1>
            <Link to='/cadastro/category'>
                Cadastrar Categoria
            </Link>
        </DefaultPage>
    )
}

export default RegisterVideo