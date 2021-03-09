import { Observable, Observer } from "rxjs";

const observer :  Observer<any> = {

    next : valor  => console.log(valor),
    error : error => console.warn(error),
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

    return ()=> {
        clearInterval(inter)
        console.log('intervalo destruido')
    }
})

//subscribo al intervalo y esto me ejecutara todo lo que esta dentro del observable
//que hara que el contador aumente en 1 cada 1 segundo
const subs1 = intervalo.subscribe( num => console.log('num:', num))
const subs2 = intervalo.subscribe( num => console.log('num:', num))
const subs3 = intervalo.subscribe( num => console.log('num:', num))

//pero como puedo detener este subscribe, ahi es donde entra el usubsciber

setTimeout(()=>{
    subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()
    console.log('completado timeout')
    
},3000)