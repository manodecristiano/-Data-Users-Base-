//LOGICA PARA PETICIONES


const urlUsuarios = 'https://reqres.in/api/users?page=2';

//cloudinary
const cloudPreset = 'autwc6pa';
const cloudUrl    =  'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';

const obtenerUsuarios = async () => {
  
const resp = await fetch( urlUsuarios );
const { data : usuarios } = await resp.json();


return usuarios;

}

const subirImagen = async ( archivoSubir ) => {

  const formData = new FormData();

  formData.append( 'upload_preset', cloudPreset );
  formData.append( 'file', archivoSubir );

   try {
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body:formData
      });

      if( resp.ok ){
         const cloudResp = await resp.json();
         console.log(cloudResp);
         return cloudResp.secure_url;
      }else{
         throw await resp.json();
      }


   } catch (error) {
   throw error;
   }



}


export {
   obtenerUsuarios,
   subirImagen
 
}

