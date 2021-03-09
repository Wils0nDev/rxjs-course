import { Observable, Observer } from "rxjs";

const os$ = new Observable<string>(
    subscriber => {
        subscriber.next('next1')
        subscriber.next('next2')
       
        subscriber.complete()
    }
)

//subscripcion : la estructura de un subscriber esta compuesto por 3 callback 
//--------
//next , error , complete 
//next : emite los valores de los subscriber
//error : si en caso existe un error , error lo emite
//complete: finaliza la subscripcion


os$.subscribe(
    //ejecuta los valores de next del subscriber
    valor => console.log('next: ',valor),
    //emite el error 
    error => console.warn(error),
    //finaliza 
    () => console.log('completado')

)

//otra forma de ejecutar un supscribe
//Observer : es una interfas , implementa los 3 callbacks necesariemente.
const observer :  Observer<any> = {

    next : valor  => console.log(valor),
    error : error => console.warn(error),
    complete: () => console.log('completado')
}

observer.next('eweewq')