import { Observable, Observer, Subject } from "rxjs";

const observer :  Observer<any> = {

    next : valor  => console.log('next: ' ,valor),
    error : error => console.warn('error: ', error),
    complete: () => console.log('completado')
}

const intervalo = new Observable(subs => {
    let count = 0;
 const interval = setInterval(()=>{
    count++
        subs.next(Math.random())
        console.log(count)
      
    },1000)

    return(()=>{
        clearInterval(interval)
        console.log('intervalo destruido')

    })
})

/**
 * Subject : 
 * 1 - casteo multuple
 * 2 - tambien es un observr
 * 3 - Next, error , complete
 */

const subject$ = new Subject()

const subs = intervalo.subscribe(subject$)

//al subscribirlos al mismo subject, el resultado de las subscripciones van a ser las mismass 
const inte1 = subject$.subscribe(observer)
const inte2 = subject$.subscribe(observer)

//const inte1 = intervalo.subscribe(rnd => console.log('subs1',rnd))
//const inte2 = intervalo.subscribe(rnd => console.log('subs2',rnd))

setTimeout(() => {

    subject$.next(10);
    subject$.complete();
    //aqui destruimos la subscripcion del intervalo
    subs.unsubscribe();

}, 3500);