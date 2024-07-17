import { of } from "rxjs";
import { map } from "rxjs";

const observable = of(1,2,3,4,5)

const numbersWithSymbol= observable.pipe(
    map((value) => `$${value}`)
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