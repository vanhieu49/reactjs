import axios from 'axios'
import * as configs from '../constans/config'

const config = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + configs.API_KEY
    }
}

export const getArtistId = (id) => {
    let url = configs.URL_BASE + 'artists/' + id
    return axios.get(url, config)
        .catch((error) => {
            console.log(error.message)
        })
}
export const getAlbumId = (id) => {
    let url = configs.URL_BASE + 'artists/' + id + '/albums?limit=5&offset=0'
    return axios.get(url, config)
        .catch((error) => {
            console.log(error.message)
        })
}
export const getAlbum = (id) => {
    let url = configs.URL_BASE + 'albums/' + id
    return axios.get(url, config)
        .catch((error) => {
            console.log(error.message)
        })
}
