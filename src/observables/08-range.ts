import { asyncScheduler, range } from "rxjs";


// asyncScheduler : pasando este parametro hacemos que nuestro range sea asincrono
//si le quitamos sera sincrono

const r = range(1,5,asyncScheduler)

console.log('inicio')
r.subscribe(console.log)
console.log('fin')