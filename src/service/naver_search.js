import axios from 'axios';

class Naver {
    constructor(id, secret){
        this.id = id;
        this.secret = secret
        this.naver = axios.create({
            baseURL: 'https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/',
            headers: {
                "X-Naver-Client-Id": this.id,
                "X-Naver-Client-Secret": this.secret,
                // 'Access-Control-Allow-Credentials': true,
                // 'Access-Control-Allow-Origin' : 'http://localhost:3000/',
                // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                // 'Access-Contron-Allow-Headers':'Origin,X-Requested-With,Content-Type,Accept',
            },
        });
    }

    async search(query){
        console.log(query + ' in naver');
        try{
            const response = await this.naver.get('search/blog',
            {   
                params:{
                    query: query,
                    display: 5,
                }
            })
            console.log(response.data.items);
            return response.data.items;
        } catch(error){console.log(error)};
        
    }
}



export default Naver;


