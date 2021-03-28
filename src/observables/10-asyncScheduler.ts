import { asapScheduler, asyncScheduler } from 'rxjs'

//asyncScheduler : 

//Basicamente nos permite creaer un setTimeOut y un setInterval

//basico
const saludar = () => console.log('hola mundo')
asyncScheduler.schedule(saludar, 2000)

//pero estos dos formas se ejecutan una sola vez
//como setTimeOut
const objct = {nombre : 'wilsn', apellidos : 'vasquez'}
const saludar2= (objct) => console.log(objct)
asyncScheduler.schedule(saludar2, 2000, objct )


//como hacemos para que se ejecute como un ciclo infinito
//cada cierto tiempo ?


const subs = asyncScheduler.schedule(function(cont){
    console.log('cont', cont)
    this.schedule(cont + 1, 1000)
}, 3000, 0 )

//como detengo este ciclo infinito ? 

//una forma

/*setTimeout(()=>{
 subs.unsubscribe()
},6000)*/

//otra forma

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000)