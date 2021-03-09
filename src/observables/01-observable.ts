//rxjs : libreria donde estan todas las funciones para crear observables
import { Observable } from "rxjs";


//Observable : es un objeto que emite valores, puede emitir 0 a x cantidad de valores
// "$" delante del nombre de la constante es un estandar
const os$ = new Observable<string>(
    //este observable emitira resultados de tipos <string>
    subscriber => {
        //el observavle emite "hola mundo1 ", etc .. entonces esos serian sus salidas
        subscriber.next('hola mundo1')
        subscriber.next('hola mundo2')
        subscriber.next('hola mundo3')
        subscriber.next('hola mundo4')
        //el complete finaliza la subscripcion
        subscriber.complete()
    }
)

//subscripcion : para que un un observable se ejecute tiene que tener un subscribe, el subscribe ejecuta
//los subscriber del observable

os$.subscribe(
    response => console.log(response)
)



