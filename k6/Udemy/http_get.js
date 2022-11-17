import http from 'k6/http'
import {check} from 'k6'

export default function (){
    var url = 'https://run.mocky.io/v3/efa24861-7a3c-4a52-bb49-9ca9c271a564'
    var headerParam = {
        headers:{
            'Content-Type' : 'application/json',
        }
    }

    const response = http.get(url, headerParam);

    check(response, {
        'is status is 200: ' : (r) => r.status === 200,
    })
    let body = JSON.parse(response.body)

    console.log(`respone body is ${JSON.stringify(body)}`)
    console.log(`Message is ${body.Message}`)

    check(response, {
        'is Message is Success: ' : (r) => JSON.parse(r.body).Message === "Data fetched successfully",
    })

}