import { from } from "rxjs";
import { filter } from "rxjs/operators";

const $number = [1,2,3,4,5,6,7,8]

const list$ = from($number)

const par$ = list$.pipe(
    
    filter((val,index) => {
         console.log(index) 
         return val % 2 === 0 }
         )
)

par$.subscribe(
    valor => {
        let ul = document.getElementById('list')
        let li = document.createElement('li')
        li.innerText = valor.toString()
        ul.appendChild(li)

    },
    error => console.log(error),
    () => console.log('completado')
)


interface Personaje {
    tipo : string
    nombre : string
}
const personajes : Personaje [] = [
    {
        tipo : 'heroe',
        nombre : 'batman'
    },
    {
        tipo : 'heroe',
        nombre : 'super man'

    },
    {
        tipo : 'villano',
        nombre : 'jocker'
    }
]

const listheroe = from(personajes)


listheroe.pipe(
    filter(p => p.tipo !== 'heroe')
).subscribe(console.log)