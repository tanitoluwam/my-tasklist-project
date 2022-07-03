import { http } from "../plugins/Axios.plugin"

export const createNote = async(payload) => http.post('/createNote', payload)

export const readNote = async (id) => http.get(`/readNote/${id}`)

export const updateNote = async (id) => http.put(`/putNote/${id}`)

export const deleteNote = async (id) => http.delete(`/deleteNote/${id}`)
