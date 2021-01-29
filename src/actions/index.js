import * as types from '../constans/ActionType'

export const actChangeQuery = (query) => {
    return {
        type: types.CHANGE_QUERY,
        query
    }
}
export const actGoHome = () => {
    return {
        type: types.GO_HOME
    }
}
export const actAstist = (to, name) => {
    return {
        type: types.GO_ARTIST,
        to,
        name
    }
}
export const actAlbum = (to, name) => {
    return {
        type: types.GO_ALBUM,
        to,
        name
    }
}