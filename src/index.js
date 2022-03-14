// import { init } from "./js/usuarios-page";
// import { obtenerUsuarios } from "./js/http-provider";


// obtenerUsuarios().then(console.log);


//  init();


import * as CRUD  from  './js/crud-provider.js';

CRUD.getUsuario( 1 ).then( console.log );
CRUD.crearUsuario( {
    name: 'Frido',
    job:'Lampista'
}).then( console.log );