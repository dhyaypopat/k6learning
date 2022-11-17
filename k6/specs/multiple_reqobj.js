import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 5,
    duration: '10s',
}


export default function () {

    const req1 = {
        method : 'GET',
        url: 'https://httpbin.test.k6.io/get'
    };
    const req2 = {
        method : 'GET',
        url: 'https://test.k6.io',
    };
    const req3 = {
        method : 'POST',
        url: 'https://httpbin.test.k6.io/post',
        body: {
            hello: 'world!',
        },
        params:{
            headers : {'Content-Type':'application/x-www-form-urlencoded'},
        },
    };

    const responses = http.batch([req1,req2,req3]);

    check(responses[2],{
        'Verify Form Data OK' : (res) => JSON.parse(res.body)['form']['hello'] == 'world!',
    })
}