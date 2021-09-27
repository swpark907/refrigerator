import axios from 'axios'

class Youtube {
    constructor(key){
        this.youtube = axios.create({
            baseURL : 'https://youtube.googleapis.com/youtube/v3',
            params : {key: key}
        })
    }

    async search(query) {
        console.log(query, 'in youtube')
        const response = await this.youtube.get('search',{
            params:{
                part: 'snippet',
                maxResults: 5,
                q: query,                
                type: 'video',
            }
        })
        // console.log(response.data.items)
        return response.data.items.map(item => ({...item, id: item.id.videoId}))
    }
}

export default Youtube;