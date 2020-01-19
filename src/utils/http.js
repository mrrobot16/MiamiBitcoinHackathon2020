export const get = async (url) => {
  const logData = data => {
    console.log('data', data);
  }
  const data = await fetch(url)
  logData(data)
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