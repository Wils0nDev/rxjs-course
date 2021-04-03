import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from 'rxjs/operators'

//map
let  range$ = range(1,5).pipe(
    map( val => val * 10)
)

range$.subscribe(console.log)

//map con fronEvent
const $keyup = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode = $keyup.pipe(
    map( event => event.code )
)

keyupCode.subscribe(console.log)

//pluck
const keyupCodePluck = $keyup.pipe(
    pluck( 'key' )
)

keyupCodePluck.subscribe(console.log)

//EJEMPLO SI QUIERO OBTENER EL VALOR:

//QUE ESTA DENTRO DE UN OBJETO Y ESTE DENTRO DE OTRO OBJETO
//keryup { target : { baaseURI : 'http://localhost:8081/' } }
const keyupCodePluck2 = $keyup.pipe(
    pluck( 'target', 'baseURI' )
)

keyupCodePluck2.subscribe(console.log)

//mapTo : mapto solo renderiza un valor en especifico 

const keyCodeMapTo = $keyup.pipe(
    mapTo('Tecla presionada')
)

keyCodeMapTo.subscribe(console.log)