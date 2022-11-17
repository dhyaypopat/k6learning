import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

/*
export const options = {
    vus: 1,
    duration : '1s',
}
*/

export default function(){

    const url = 'https://reqres.in/api/users';
    const payload = JSON.stringify({
        username : 'dhyay',
        job : 'simformQA',
    });

    const params = {
        header:{
            'Content-Type' : 'application/json',
        },
    };

    const res = http.post(url,payload,params);
    check(res, {
        'is status 200': (r) => r.status === 201,
        'is res body has username': (r) => r.body.includes('dhyay')
    });

    console.log('response body',res.body);

    //http.post('http://dummyjson.com/auth/login');
}
