import React from 'react'

import {FormWrapper, ButtonWrapper, Button } from './styles'


const DefaultForm = ({ title, children }) => {
    return(
        <FormWrapper>
            <h1>{title}</h1>
            { children }
            <ButtonWrapper>
                <Button Save>Salvar</Button>
                <Button>Limpar</Button>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default DefaultForm