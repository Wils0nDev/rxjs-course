import { interval, Observer } from 'rxjs'

const observer :  Observer<any> = {

    next : valor  => console.log(valor),
    error : error => console.warn(error),
    complete: () => console.log('completado')
}

//interval  emite un observer segun el tiempo que se le indique, es infinito.

//es asincrono

console.log('inicio')
const interval$ = interval(1000)
console.log('fin')

interval$.subscribe(observer)