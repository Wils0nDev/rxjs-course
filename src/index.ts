import { Observable } from "rxjs";


//Observable
const os$ = new Observable<any>(
    subs => {
        subs.next('hola mundo1')
        subs.next('hola mundo2')
        subs.next('hola mundo3')
        subs.next('hola mundo4')
        
        subs.complete()
    }
)

os$.subscribe(console.log)

//subscripcion
os$.subscribe(
    valor => console.log(valor),
    error => console.error()
)

