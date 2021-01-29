import * as configs from './../constans/config'
// const queryString = require('query-string');


const config = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + configs.API_KEY
    }
}

export const getArtist = (query) => {
    // let params = {
    //     type: 'artist',
    //     limit: 4,
    //     offset: 0
    // }
    // let strParams = queryString.stringify(params)
    // console.log(strParams)
    let url = configs.URL_BASE + 'search?q=' + query + '&type=artist&limit=4&offset=0'

    return fetch(url, config)
        .then(response => response.json())

}
