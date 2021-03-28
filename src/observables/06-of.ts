import { Observable, Observer, of } from "rxjs";

//of : toma argumentos y genera una secuencia

let of$

//como variable 
let var_of = of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);

//console.log(var_of)

//como funcion
function sof():Observable<any>{

    of$ = of(10,20,30)

    return  of$
}

 sof().subscribe(next => console.log(next))

//console.log(ss);