import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'370b0926679d4dd6898375d0514df108'
    }
})

