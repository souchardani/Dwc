//regex: buscar patrones dentro de un texto
//inicia y termina con /
//al final, estan las flags, que nos dicen informacion de busqueda de la cadeda:
//g singifica global, que busca en toda la cadena
// i es case insentsitive
//e+ significa una o mas de este token, ejemplo, puedes hacer match con e o con ee
//ea? /// ? significa opcional, con lo que puede haber e y opcionalmente una a
//* matchea 0 o +, es decir re* matchea todas las r, y si hay algunas e que le siguen tambien
//.at // mathea absolutamente todo que incluya ej. match cat eat
// \w matchea cualquier palabra y letras
// \s matchea cualquier espacio qye haya

//todas las palabras con 4 letras
let exp = /\w{4}/g;

//todos los caracteres que no sean letras
let exp1 = /\W/g;

//todos los espacios
let exp2 = /\s/g;

//todos los espacios en blanco
let exp3 = /\s/g;
