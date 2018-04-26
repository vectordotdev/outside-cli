const axios = require('axios')

module.exports = async () => {
  const results = await axios({
    method: 'get',
    url: 'https://api.ipdata.co',
  })

  const { city, region } = results.data
  return `${city}, ${region}`
}
