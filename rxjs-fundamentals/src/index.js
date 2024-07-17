import { of } from "rxjs";
import { reduce } from "rxjs/operators";

const observable = of(1,2,3,4,5).pipe(
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