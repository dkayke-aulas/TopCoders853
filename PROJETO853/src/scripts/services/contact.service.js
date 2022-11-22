
const baseUrl = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('Content-Type', 'application/json')

export const ContactGet = async () => {
    const token = sessionStorage.getItem("@token")
    headers.append('Authorization', token)
    const response = await fetch(baseUrl + 'contact', { headers, method: "GET" })
    return await response.json()
}

