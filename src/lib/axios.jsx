import axios from "axios";

const conexionAxios = axios.create({
    baseURL: "https://examen-back-end-five.vercel.app/api"
})

export default conexionAxios