import axios from "axios"

export const useAxios = async ({ method, data, url, headers }) => {
    await axios({
        method: method,
        url: url,
        data: data,
        headers: headers
    }).then((response) => { return (response?.data) })
}