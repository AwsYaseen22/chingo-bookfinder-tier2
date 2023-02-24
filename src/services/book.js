import axios from 'axios'

const baseUrl = 'http://localhost:8000/api/books/'


export default async function getBooks ( title ) {
    const response = await axios.get( `${baseUrl}${title}` )
    return response.data

}

