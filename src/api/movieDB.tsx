import axios from "axios";

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'', //Aquí viene el api_key generado en themoviedb para cada persona
        language:'es-ES'
    }
})

export default movieDB;
