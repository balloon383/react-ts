import React, { FC } from 'react'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './style.css'
import Nav from './nav/Nav';


const Header: FC = () => {
    

  return (
    <section className='header'>
      <section className='content__container header__container'>
        <LogoDevIcon className='logo__icon'/>
        <Nav />
      </section>
    </section>
      
  )
}

export default Header