import { interval } from "rxjs";
import { reduce, take, scan } from "rxjs/operators";

const observable = interval(500).pipe(
    take(5),
    scan(
        (acumulator, value) => acumulator + value
        ,5)
)

const subscription = observable.subscribe({
    next(value){
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
}
)

console.log('finishing...')