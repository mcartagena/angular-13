import { of, fromEvent } from "rxjs";
import { map, filter } from "rxjs";

const observable = fromEvent(document,'keydown').pipe(
    map((event) => event.code),
    filter((code) => code === 'Space')
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