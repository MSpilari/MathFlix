import axios from 'axios'

const baseURL = document.location.hostname === 'localhost' ? 'http://localhost:3333' : 'https://apimathflix.herokuapp.com/'


const api = axios.create({
    baseURL
})

export default api