import http from 'k6/http';
import {check} from 'k6';
import {Rate} from 'k6/metrics'

export let errorRate = new Rate('errors')

export let options = {
    thresholds : {
        errors: ['rate<0.1'] // i.e 10% error
    }
}

export default function()
{

    let res = http.get('https://run.mocky.io/v3/61a9df25-934c-4acc-ab81-58462935f339')
    console.log(`response body length ${res.body.length} for VU= ${__VU} ITERA = ${__ITER}`)
    const check1 = check(res,{
        'is response status is 200 :' :(r) => r.status === 200,
    })
    errorRate.add(!check1);

    const check2 = check(res,{
        'body size is 12 bytes :' :(r) => r.body.length == 12,
    })
    errorRate.add(!check2);
}

// From rate.js , we will send Performance result to influxdb

