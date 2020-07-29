import React from "react";
import DefaultForm from '../DefaultForm'

const FormRegister = () => {
  return (
      <DefaultForm title={'Nova Categoria'}>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="color"/>
      </DefaultForm>
  );
};

export default FormRegister
