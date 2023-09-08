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

const CREATE_POST = async (userId, post) => {

    await axios.put(URL + '/' + userId, post).then(res => console.log(res))

}

const ADD_COMMENT = async (commenterId, posterId, commentsArr, newPostsArr) => {

    await axios.put(URL + "/" + commenterId, commentsArr);

    await axios.put(URL + "/" + posterId, newPostsArr);
    
};

export { GET_USER, GET_USERS, CREATE_POST, ADD_COMMENT };