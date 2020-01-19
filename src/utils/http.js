import axios from 'axios'
export const get = async (url) => {
  const data = await axios.get(url)
  return data
}

export const post = async (url, data) => {
  data = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(url, data)
  return await response.json()
}