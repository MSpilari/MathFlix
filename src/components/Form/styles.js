import styled, { css } from 'styled-components'

export const FormWrapper = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:100%;
    padding-top: 50px;
    padding-left:5%;
    padding-right:5%;
` 

export const Button = styled.button`
  color: var(--black);
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
  border: 1px solid var(--blackLighter);
  background-color: var(--blackLighter);
  
  ${props => props.Save && css ` 
    border: 1px solid var(--primary);
    background-color: var(--primary);
    margin-right: 10px;
  `}
  
  &:hover,
  &:focus {
  opacity: 0.5;
    }
`

export const ButtonWrapper = styled.div`
    display:flex;
    margin: 8px 0;
`