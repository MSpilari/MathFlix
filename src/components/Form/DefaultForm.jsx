import React from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import {FormWrapper, ButtonWrapper, Button } from './styles'

const submitForm = (event, ApiCall, dataToSubmit, back) => {
    event.preventDefault()
    const apiBody = ApiCall === 'categories' ? 
        {   categoryName: dataToSubmit.Category,
            categoryDescription: dataToSubmit.Description,
            categoryColor: dataToSubmit.Color
        } : 
        {   videoName: dataToSubmit.Title,
            videoDescription: dataToSubmit.Description,
            videoLink: dataToSubmit.VideoLink,
            videoImgLink: dataToSubmit.VideoLinkImg,
            categoryId: Number(dataToSubmit.Category)
        }
        api.post(ApiCall, apiBody)
            .then(() => alert('Cadastro realizado com sucesso'))
            .catch((err) => console.log(err))
        
        back.push('/')
    
}

const DefaultForm = ({ title, children, urlApi, dataSend }) => {
    const history = useHistory()
    return(
        <FormWrapper onSubmit={e => submitForm(e, urlApi, dataSend, history)}>
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