import http from 'k6/http'
import { check } from 'k6'

export let options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        // rate of successful checks must be greater than 95%. >95% checksmust PASS/ SUCCESSFUL
        'checks': ['rate>0.95']
    }
}

export default function () {
    const response = http.get('https://run.mocky.io/v3/983af971-096a-4108-b262-d13ce7f46f47');

    //assuming that above API retuns 500
    check(response, {
        'is status is 500 : ' : r => r.status === 500
    })

    /*
    ✗ is status is 500 :  
     ↳  0% — ✓ 0 / ✗ 667

     Total 667 requets - none returns 500

     here, threashold is configured on check metrics
     rate of successful check must be greater than 95%
     
    */
}