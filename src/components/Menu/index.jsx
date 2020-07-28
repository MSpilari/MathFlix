import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Logo.png'
import { Button } from '../Button'

const Menu = () => {
    return(
        <nav className='Menu'>
            <Link to="/">
                <img className='Logo' src={Logo} alt="Logo"/>
            </Link>
            <Button as={Link} className={'ButtonLink'} to={'/cadastro/video'}>
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu