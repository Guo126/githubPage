import axios from './ajax.js'

export const getInfo = (data) => {
    return axios.get('https://api.github.com/users/111', data)
}
