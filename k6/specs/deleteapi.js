import http from 'k6/http';

const url = 'https://httpbin.test.k6.io/delete';

export const options = {
    vus:5,
    duration: '20s',
}

export default function(){

    const params = {headers : {'X-MyHeader': 'k6test'}}

    http.del(url,null,params);
}


