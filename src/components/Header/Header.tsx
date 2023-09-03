import React, { FC } from 'react'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './style.css'
import Nav from './nav/Nav';
import { Container } from '@mui/material';

export default function Header() {
    

  return (
    <section className='header'>
      <Container maxWidth="lg" className='header__container'>
        <LogoDevIcon />
        <Nav />
      </Container>
    </section>
      
  )
}
