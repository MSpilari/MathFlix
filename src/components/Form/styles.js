import styled from 'styled-components'

export const FormWrapper = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:100%;
` 

export const SaveButton = styled.button`
  color: var(--black);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 48px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  background-color: var(--primary);
      
  &:hover,
  &:focus {
  opacity: 0.5;
    }
`
export const ClearButton = styled.button`
  color: var(--black);
  border: 1px solid var(--blackLighter);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 48px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  background-color: var(--blackLighter);
      
  &:hover,
  &:focus {
  opacity: 0.5;
    }
`
export const ButtonWrapper = styled.div`
    display:flex;
`