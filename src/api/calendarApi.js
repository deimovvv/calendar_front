/* import axios from 'axios'; */
const axios = require("axios");
import { getEnvVariables } from '../helpers'

const { VITE_API_URL } = getEnvVariables()

const calendarApi = axios.create({
    baseURL: VITE_API_URL
})


// TO DO Configurar interceptores


export default calendarApi;