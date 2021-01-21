import axios from 'axios'

const KEY = 'AIzaSyAQ8v1xV6YPLHKzEv7xAPpkMRKH5VKu_Zo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY

    }
})

