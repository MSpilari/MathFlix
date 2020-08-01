import React, { useState } from "react";
import DefaultForm from '../DefaultForm'
import { AllWrapper, InputStyled, LabelStyled, TextAreaStyled } from '../inputstyles'

const FormRegister = () => {
  const [FormCategory, setFormCategory] = useState(() => {
    return {
      Category: '',
      Description: '',
      Color: ''
    }

  })
  return (
      <DefaultForm title={`Nova Categoria: ${FormCategory.Category}`}>
        <AllWrapper>
          <InputStyled 
            type="text" 
            name='Category' 
            autoComplete='off'
            value={FormCategory.Category} 
            onChange={(e) => setFormCategory({
              ...FormCategory,
              [e.target.name]: e.target.value
            })} 
            required
            />
          <LabelStyled htmlFor="name">Nome da Categoria</LabelStyled>
        </AllWrapper>
        <AllWrapper textarea>
          <TextAreaStyled
           name='Description'
           value={FormCategory.Description}
           onChange={(e) => setFormCategory({
            ...FormCategory,
            [e.target.name]: e.target.value
          })}
           required
           />
          <LabelStyled textarea>Descrição</LabelStyled>
        </AllWrapper>
        <AllWrapper>
          <label htmlFor="color">Cor:</label>
          <InputStyled
            name='Color'
            value={FormCategory.Color}
            onChange={(e) => setFormCategory({
              ...FormCategory,
              [e.target.name]: e.target.value
            })} 
            type='color'
          />
        </AllWrapper>
      </DefaultForm>
  );
};

export default FormRegister
