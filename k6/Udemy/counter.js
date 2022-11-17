import { Counter } from 'k6/metrics'

var myCounter = new Counter('my Counter')

export default function (){
    myCounter.add(1)
    myCounter.add(5)
}