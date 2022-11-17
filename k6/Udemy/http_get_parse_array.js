import http from 'k6/http'

export default function(){
    let response = http.get('https://run.mocky.io/v3/e52a7434-b2e4-458f-881d-5a8ecd9ec7eb')

    let body = JSON.parse(response.body)
    body.forEach(element => {
        console.log(`name is ${element.name}`)
    });

    let response1 = http.get('https://run.mocky.io/v3/cc40360b-0616-488d-82f1-c84b18d7099a')
    let body1 = JSON.parse(response1.body)
    body1.data.forEach(element => {
        console.log(`name from data is ${element.name}`)

        element.array.forEach(elementArr => {
            console.log(`name from data is ${elementArr}`)

        })
    });
}
