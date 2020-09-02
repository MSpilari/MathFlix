import styled, { css } from 'styled-components'

export const AllWrapper = styled.div `
  height:40px;
  display:flex;
  width:100%;
  align-items:center;
  position:relative;
  margin-bottom:20px;
  ${props => props.textarea && css`
    height:100px;
  `}
`

export const InputStyled = styled.input `
  width:100%;
  height:100%;
  border:none;
  color:var(--white);
  border-bottom:2px solid rgba(0, 0, 0, 0.1);
  font-size:17px;
  outline:none;
  background-color: rgba(0, 0, 0, 0.1);
  
  &:focus,
  &:valid{
    border-bottom:2px solid var(--primary)
  }
  
  &:focus ~ label,
  &:valid ~ label{
    transform: translateY(-20px);
    font-size:10px;
  }
`
export const SelectStyled = styled.select `
  width:100%;
  height:100%;
  border:none;
  color:var(--white);
  border-bottom:2px solid rgba(0, 0, 0, 0.1);
  font-size:17px;
  outline:none;
  background-color: rgba(0, 0, 0, 0.1);
  
  &:focus,
  &:valid{
    border-bottom:2px solid var(--primary)
  }
  
  &:focus ~ label,
  &:valid ~ label{
    transform: translateY(-20px);
    font-size:10px;
  }
`
export const OptionStyled = styled.option `
  background-color:black;
`

export const TextAreaStyled = styled.textarea `
  width:100%;
  height:100%;
  border:none;
  color:var(--white);
  border-bottom:2px solid rgba(0, 0, 0, 0.1);
  font-size:17px;
  outline:none;
  resize:none;
  background-color: rgba(0, 0, 0, 0.1);

  &:focus,
  &:valid{
    border-bottom:2px solid var(--primary)
  }
  
  &:focus ~ label,
  &:valid ~ label{
    transform: translateY(-20px);
    font-size:10px;
  }
`

export const LabelStyled = styled.label `
  position:absolute;
  bottom:10px;
  left:0px;
  color:var(--white);
  pointer-events:none;
  transition:0.3s ease-in;
  ${props => props.textarea && css `
    top:10px;
  `}
`