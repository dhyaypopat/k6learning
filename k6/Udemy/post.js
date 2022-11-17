import http from 'k6/http'
import {check} from 'k6'

export default function(){

    var url = 'https://run.mocky.io/v3/7e92d371-7e18-4ef6-9e12-f94e8d14510f'

    var param = {
        headers : {
            'Content-Type':'application/json'
        }
    }

    var payload = JSON.stringify({
        email : "abc@gmail.com",
        password : "Password"
    })

    let res = http.post(url,param,payload) 
    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    console.log('response body',res.body);
    
}