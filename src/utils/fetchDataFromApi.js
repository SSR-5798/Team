import axios from "axios"

const headers = {
    "Content-type":"application/json"
}

export const fetchDataFromApi = async(url) => {
    const { data } = await axios.get(url, { headers })
    return data
}