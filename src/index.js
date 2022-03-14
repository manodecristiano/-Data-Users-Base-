// import { init } from "./js/usuarios-page";

// import { obtenerUsuarios } from "./js/http-provider";

import { init2 } from "./js/archivos-pages.js"
import * as CRUD  from  './js/crud-provider.js';

// obtenerUsuarios().then(console.log);




CRUD.getUsuario( 1 ).then( console.log );
CRUD.crearUsuario( {
    name: 'Frido',
    job:'Lampista'
}).then( console.log );
CRUD.actualizarUsuario(1, {
    name: 'Melissa',
    job:'Developer'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);

init2();