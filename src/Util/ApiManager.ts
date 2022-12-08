import axios from 'axios'

export const GetMethod = (url: string) => {
    return axios({
        method: 'get',
        url: url
    })
}