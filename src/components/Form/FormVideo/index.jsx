import React, { useState } from 'react'
import DefaultForm from '../DefaultForm'

import { AllWrapper, InputStyled, LabelStyled, TextAreaStyled } from '../inputstyles'


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
    console.log(FormVideo)
    return(
        <DefaultForm title={'Formulário de Registro de novo vídeo'}>
            <AllWrapper>
                <InputStyled
                    name='Title'
                    value={FormVideo.Title}
                    onChange={(e) => setFormVideo({
                        ...FormVideo,
                        [e.target.name]: e.target.value
                    })}
                    required
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
                 />
                <LabelStyled>Link da imagem do vídeo</LabelStyled>
            </AllWrapper>
            <AllWrapper>
                <InputStyled 
                    name='Category'
                    value={FormVideo.Category}
                    onChange={(e) => setFormVideo({
                        ...FormVideo,
                        [e.target.name]: e.target.value
                    })} 
                    list='categorias' 
                    required
                />
                <datalist id='categorias'>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                </datalist>
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
                 required/>
                <LabelStyled textarea>Descrição</LabelStyled>
            </AllWrapper>
        </DefaultForm>
    )
}

export default RegisterVideo
