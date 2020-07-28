import React from 'react'
import './styles.css'
import Logo from '../../assets/Logo.png'
import { Button } from '../Button'

const Menu = () => {
    return(
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="Logo"/>
            </a>
            <Button as='a' className={'ButtonLink'} href={'/'}>
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu