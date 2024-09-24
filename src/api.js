import axios from "axios"

const getImages = async (query) => {
  const response=await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization:'Client-ID 6ayp2H0Qin9WMOGpybLKpnbtCrh5V9JTtdpKNAuczJ0'
    },
    params:{
        query: query
    }
  })

  return response.data.results
}

export default getImages