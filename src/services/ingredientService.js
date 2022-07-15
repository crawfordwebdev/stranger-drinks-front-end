import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/ingredients`

async function create(ingredient) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, // Form Data notification for the back-end
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ingredient)
  })
  return res.json()
}

export {
  create,
}