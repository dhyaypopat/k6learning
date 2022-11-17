import http from 'k6/http';
import { check } from 'k6';

export default function () {

    const res1 = http.get('https://httpbin.test.k6.io/cookies/set?my_cookie=hello%20world' , 
    { 
        redirects : 0,
    });

    const jar = http.cookieJar();
    const cookies = jar.cookiesForURL('http://httpbin.test.k6.io/'); //query
    

}