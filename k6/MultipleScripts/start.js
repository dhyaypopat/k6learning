
// Multiple Scripts Running Together 

import http from 'k6/http';
import test1 from '/Users/dhyay/Desktop/k6/MultipleScripts/test1.js';
import test2 from '/Users/dhyay/Desktop/k6/MultipleScripts/test2.js';

export let options = {
    vus:15,
    duration:'60s'
}

export default function(){
    test1();
    test2();
}
