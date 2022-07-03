import { http } from "../plugins/Axios"

export const registerUser = async (payload) => {
    return http.post('/createUser', payload)
}

export const loginUser = async (payload) =>{ 
    return http.post('/loginUser' , payload)
}
