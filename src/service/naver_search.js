import axios from 'axios';

class Naver {
    constructor(id, secret){
        this.id = id;
        this.secret = secret;
        this.naver = axios.create({
            baseURL: 'https://openapi.naver.com/v1/',
            'Access-Control-Allow-Origin' : '*',
            headers: {                
                "X-Naver-Client-Id": this.id,
                "X-Naver-Client-Secret": this.secret,
            },
        });
    }

    async search(query){
        try{
            const response = await this.naver.get('search/blog',
            {   
                params:{
                    query: query,
                    display: 5,
                }
            })
            return response.data.items;
        } catch(error){console.log(error)};
        
    }
}



export default Naver;


