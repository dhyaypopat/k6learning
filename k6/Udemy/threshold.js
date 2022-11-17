// Threshold define the Pass/Fail Criteria of Test 

// Example 
// TC_01 System should not produce more than 1% errors 
// TC_02 Response Time for 95% of API Should be below 200 milliseconds
// TC_03 Response Time for 99% of requests should be below 400 milliseconds

import http from 'k6/http';
//import {Check} from 'k6';
import {Rate} from 'k6/metrics';

const failRate = new Rate('failed requests')

export let options = {
    threshold:{
        'failed request' : ['rate<0.1'], // TC_01
        'http_request_duration' : ['p(95)<001' , 'p(99)<001'] // TC_02 TC_03
    }
};

export default function(){
    let res = http.get('https://run.mocky.io/v3/7e92d371-7e18-4ef6-9e12-f94e8d14510f')

    // Applying Thresholds
    failRate.add(res.status !==200) // If response is not 200 then fail 

}