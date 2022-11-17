import {Counter,Trend} from 'k6/metrics'
import http from 'k6/http'
import {sleep} from 'k6'

var retryCounter = new Counter('GETAPI_MAX_RETRY_COUNTER')
var retryTrend = new Trend('GETAPI_MAX_RETRY_TREND')
export const options = {
    vus: 2,
    iterations: 2,
}

export default function(){
    
    var maxAttempts = 5 
    retryCounter.add(1)
    for(var ret= 5;ret>0;ret--){
        var numberofAttempts = maxAttempts - ret +1;
        retryTrend.add(numberofAttempts)

        const response = http.get('https://run.mocky.io/v3/fc47f05e-dfd3-4b00-b7f4-5ba87c477f0f');

    if(response.status !== 400){
        retryCounter.add(1)
        console.log(`response is not correct , attempt is ${numberofAttempts} VU=${__VU} ITER=${__ITER}`)
        sleep(1);
    }
    else{
        ret == 0;
    }
    }
}
