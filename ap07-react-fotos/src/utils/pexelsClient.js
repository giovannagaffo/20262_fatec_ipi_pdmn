import axios from  'axios'

export default axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: 'vsaS6gP8WEn8aUBrTFgcxDuxy6yMGQF3LYrWMYLJh0gJwtnn6hHogRLe'
    }
})