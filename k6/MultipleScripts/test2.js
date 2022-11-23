import http from 'k6/http';
import {check} from 'k6';

export let options = {
    vus:5,
    duration:'20s',
}

export default function()
{
    http.get('https://run.mocky.io/v3/7e92d371-7e18-4ef6-9e12-f94e8d14510f');
}

