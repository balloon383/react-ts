import React from 'react'
import Button from '@mui/material/Button';

export default function Nav() {
  return (
    <nav>
        <ul>
            <li className='login'><a href="#"><Button variant="contained">Hello world</Button></a></li>
            <li className='logout'><a href="#">Log Out</a></li>
        </ul>      
    </nav>
  )
}
