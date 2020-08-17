import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  

  &:after{
    display:none;
    content: '${({ title })  => `${title}` }';
    border-radius:8px;
    font-size:35px;
    color:white;
    background-color:rgba(0, 0, 0, 0.9);
    transition: display 0.5s;
  }

  &:hover:after{
    display:block;
  }

   
`;

