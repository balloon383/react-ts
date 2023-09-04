import React, { FC } from 'react'
import Button from '@mui/material/Button';
import './style.css'


const Nav: FC = () => {

  
  return (
    <nav>
        <ul className='nav__ul'>
            <li className='login'><a href="#"><Button variant="contained">Log In</Button></a></li>
            <li className='logout'><a href="#"><Button variant="text">Log Out</Button></a></li>
        </ul>      
    </nav>
  )
}
export default Nav
