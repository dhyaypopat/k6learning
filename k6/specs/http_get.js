import http from 'k6/http';

export default function () {
  
    // tags.name="https://test.k6.io?id=${}",
    http.get(http.url`https://test.k6.io?id=1`);
  
}