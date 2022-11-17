import http from 'k6/http'

export let options = {
    stages: [
        {duration:'10s' , target: 5}, // 5 VU for 10 seconds
        {duration:'20s' , target: 3}, // 3 VU for 20 seconds
        {duration:'30s' , target: 3}, // 3 VU for 30 seconds
    ]
}

export default function () {

    http.get('https://www.google.com');


}