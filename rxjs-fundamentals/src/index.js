import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const observable = interval(500).pipe(
    take(5),
    tap(console.log),
    reduce(
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