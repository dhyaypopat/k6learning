import {check} from 'k6';
import http from 'k6/http';

export default function () {
    const res = http.get('http://test.k6.io');
    check(res,{
        // TC-01 Verify the Status code is 200
        'is status 200' : (r) => r.status === 200,

        // TC-02 Verify the body statements 
        'Verify the HomePage Text' : (r) => r.body.includes('Collection of simple web-pages suitable for load testing'),

        
    });
}