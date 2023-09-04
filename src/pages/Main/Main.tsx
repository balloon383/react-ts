import React, { FC, useEffect, useState } from 'react'
import { IUsers } from '../../types/types'
import axios from 'axios'
import { GET_USERS } from '../../api'

const Main: FC = () => {

  const [users, setUsers] = useState<IUsers[]>()  

  useEffect(() => {
    getUsers()
  }, [])
  
  const getUsers = async() => {
    try {
      let response = await GET_USERS()
      console.log(response)
      setUsers(response)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <section className='content__container'>
      Main
    </section>
  )
}

export default Main