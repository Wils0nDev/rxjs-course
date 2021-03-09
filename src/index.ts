import { Observable, Observer } from "rxjs";


//En este ejemplo podemos observar como primero el unsupscriber es muy distinto al complete

//primero se ejecuta el observer subscrito : ejecuta el setinterval

//y despues de 2.5 seguntos se ejecuta el complete y se retorna  el intervalo destruido
//de cada uno de los subscriber

//por ultimo se ejecuta a los 3 segundos el setTimeout ejecutando los 3 unsubscriber

const observer :  Observer<any> = {

    next : valor  => console.log('next: ' ,valor),
    error : error => console.warn('error: ', error),
    complete: () => console.log('completado')
}


const intervalo = new Observable<number>( subs => {

    //crear un contador 1,2,3,4,5....
    let count = 0;
   const inter = setInterval(()=> {
        count++
       subs.next(count)
       console.log(count)
    },1000)

   setTimeout(() => {
       subs.complete()
   }, 2500);

   

    return ()=> {
        clearInterval(inter)
        console.log('intervalo destruido')
    }
})


const subs1 = intervalo.subscribe(observer)
const subs2 = intervalo.subscribe(observer)
const subs3 = intervalo.subscribe(observer)

//Pero como podemos hacer esto mas optimo, encadenando subscripciones

subs1.add(subs2)
.add(subs3) //esta encadenación nos permitira descrubir a todos con solo uno de ellos 

setTimeout(()=>{
    subs1.unsubscribe() //con la encadenación de subscripciones, con desuscribir el primero se desuscriben todos
   /* subs2.unsubscribe()
    subs3.unsubscribe()*/
    console.log('completado timeout')
    
},3000)

