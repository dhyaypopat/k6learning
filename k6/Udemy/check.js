import http from 'k6/http';
import {check} from 'k6';



export default function(){
    
    //let res = http.get('https://run.mocky.io/v3/413f3d20-902e-4d45-afff-5bbfde711a7e');
    
    let res = http.get('https://run.mocky.io/v3/61a9df25-934c-4acc-ab81-58462935f339')
    console.log(`response body length ${res.body.length} for VU= ${__VU} ITERA = ${__ITER}`)
    check(res,{
        'is response status is 200 :' :(r) => r.status === 200,
        'body size is 0 bytes :' :(r) => r.body.length == 41,
    })
    
}