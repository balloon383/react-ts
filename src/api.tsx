import axios from "axios";
import { IUsers } from "./types/types";
const USERS_URL = 'https://64f5acbd2b07270f705d8683.mockapi.io/users'
const POSTS_URL = 'https://64f5acbd2b07270f705d8683.mockapi.io/posts'

export const GET_USERS = async () => {
    let response = await axios.get<IUsers[]>(USERS_URL)
    return response.data
}
