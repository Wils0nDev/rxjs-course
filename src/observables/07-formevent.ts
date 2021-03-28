import { fromEvent } from "rxjs";


const scroll$ = fromEvent<MouseEvent>(document.getElementById('btn'),'click')

scroll$.subscribe(
    next => {
        let div = document.createElement('h1')
        let p = document.createElement('p')
        let body = document.body
        p.innerText = 'hiciste click'
        div.appendChild(p)
        body.appendChild(div)

    }
)