import axios from 'axios'

const URL = "https://64f5acbd2b07270f705d8683.mockapi.io/users";

const GET_USERS = async () => {

    let result
    
    await axios.get(URL).then((res) => {
        result = res.data
    })

    return result
    
} 

const GET_USER = async (id) => {

    let result
    
    await axios.get(URL + '/' + id).then((res) => {
        result = res.data
    })

    return result
    
} 

export { GET_USER, GET_USERS};