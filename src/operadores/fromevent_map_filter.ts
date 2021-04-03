
//fromEvent, MAP Y FILTER
import { from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";


//con el fromEvent capturo el evento del teclado
const keyboard = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    //con el map recorro cada propiedad del objeto keyboradevent y obtengo el code
    map(event => event.code),
    //le paso el code al filter y le digo que emita el resultado segun la condicion
    // en este caso si el codigo es igual a enter
    filter(code => code ==  'Enter')
).subscribe(console.log)