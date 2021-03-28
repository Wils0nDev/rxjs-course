//Ejemplos con el OF Y FROM 

import { from, of } from "rxjs";

//of : toma argumentos y genera una secuencia

//from = array, promise, iterable, observable

const observer = {

    next : val => console.log('next: ', val),
    complete: () => console.log('complete')
}

const source$ = from([1,2,3,4,5]);
const sources$ = of(...[1,2,3,4,5]);

//source$.subscribe(observer)

//sources$.subscribe(observer)

//cosumiendo un api con fetch y obteniendo la respuesta con el from
const fetch$ = from( fetch('https://api.github.com/users/wStrike18') )

fetch$.subscribe( async resp=> {
    console.log(resp)

   const dataSorce = await resp.json()
   console.log(dataSorce)
})


//Con Iterables
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

const miIterable = miGenerador();
//Obtener datos e mi iterable

// 1 - forma
/*for (let id of  miIterable){
    console.log(id)
 }*/

//2 - forma
from( miIterable).subscribe( observer );

