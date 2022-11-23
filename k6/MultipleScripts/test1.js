import http from 'k6/http';
import {check} from 'k6';

export let options = {
    vus:5,
    duration:'20s',
}

export default function(){
    http.get('https://run.mocky.io/v3/61a9df25-934c-4acc-ab81-58462935f339')
}