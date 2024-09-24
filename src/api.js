import axios from "axios"

const getDogImages = async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random/10')
  return response.data.message
}

export default getDogImages