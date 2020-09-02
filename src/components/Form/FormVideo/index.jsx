import React, { useState, useEffect } from 'react'

import DefaultForm from '../DefaultForm'
import api from '../../../services/api'

import { 
        AllWrapper, 
        InputStyled, 
        LabelStyled, 
        TextAreaStyled, 
        SelectStyled,
        OptionStyled 
    } from '../inputstyles'


const RegisterVideo = () => {
    const [FormVideo, setFormVideo] = useState(() => {
        return {
            Title: '',
            VideoLink:'',
            VideoLinkImg: '',
            Category: '',
            Description: ''
        }
    })
    const [Categories, setCategories] = useState(() => [])
    
    useEffect(() => {
        api.get('categories')
            .then(response => setCategories(response.data))
    }, [])
    
    return(
        <DefaultForm 
            urlApi={'videos'} 
            title={'Formulário de Registro de novo vídeo'}
            dataSend = {FormVideo}
        >
            <AllWrapper>
                <InputStyled
                    name='Title'
                    value={FormVideo.Title}
                    onChange={(e) => setFormVideo({
                        ...FormVideo,
                        [e.target.name]: e.target.value
                    })}
                    required
                    autoComplete='off'
                 />
                <LabelStyled>Titulo</LabelStyled>
            </AllWrapper>
            <AllWrapper>
                <InputStyled 
                    name='VideoLink'
                    value={FormVideo.VideoLink}
                    onChange={(e) => setFormVideo({
                        ...FormVideo,
                        [e.target.name]: e.target.value
                    })}
                    required
                    autoComplete='off'
                />
                <LabelStyled>Link do vídeo</LabelStyled>
            </AllWrapper>
            <AllWrapper>
                <InputStyled
                    name='VideoLinkImg'
                    value={FormVideo.VideoLinkImg}
                    onChange={(e) => setFormVideo({
                        ...FormVideo,
                        [e.target.name]: e.target.value
                    })}
                    required
                    autoComplete='off'                 
                    />
                <LabelStyled>Link da imagem do vídeo</LabelStyled>
            </AllWrapper>
            <AllWrapper>
                <SelectStyled 
                    name='Category'
                    value={FormVideo.Category}
                    onChange={(e) => setFormVideo({
                        ...FormVideo,
                        [e.target.name]: e.target.value
                    })}  
                    required
                >
                    <OptionStyled value="" disabled></OptionStyled>
                    {Categories.map(category => {
                        return <OptionStyled key={category.id} value={category.id}>{category.categoryName}</OptionStyled>
                    })}
                </SelectStyled>
                <LabelStyled>Categoria</LabelStyled>
            </AllWrapper>
            <AllWrapper textarea>
                <TextAreaStyled
                 name='Description'
                 value={FormVideo.Description}
                    onChange={(e) => setFormVideo({
                        ...FormVideo,
                        [e.target.name]: e.target.value
                    })}
                 required
                 autoComplete= 'off'
                 />
                <LabelStyled textarea>Descrição</LabelStyled>
            </AllWrapper>
        </DefaultForm>
    )
}

export default RegisterVideo
