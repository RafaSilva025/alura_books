import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito(id) {
    await favoritosAPI.post(`/${id}`)

}

async function dFavorito(id) {
    await favoritosAPI.post(`/${id}`)

}

export {
    getFavoritos
}