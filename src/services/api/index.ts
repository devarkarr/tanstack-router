import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const authURL = import.meta.env.Vite_AUTH_URL

const api = axios.create({
  baseURL,
})

export const authApi = axios.create({
  baseURL: authURL,
})

export default api
