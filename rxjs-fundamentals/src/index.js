import { timer } from "rxjs";

const observable = timer(0, 1000);

const subscription = observable.subscribe(
    console.log
)
