import React from 'react'

import {FormWrapper, ButtonWrapper, SaveButton, ClearButton} from './styles'


const DefaultForm = ({ title, children }) => {
    return(
        <FormWrapper>
            <h1>{title}</h1>
            { children }
            <ButtonWrapper>
                <SaveButton>Salvar</SaveButton>
                <ClearButton>Limpar</ClearButton>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default DefaultForm