import axios from 'axios'
const baseUrl = 'https://www.googleapi.com/books/v1/volumes?q='
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

export default async function getBooks ( title ) {

    const response = await axios.get( `${baseUrl}intitle:${title}&key=${apiKey}` )
    return response.data

}

