<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">

                <h3 class="pt-2">Ciudades</h3>

                <div class="row justify-content-end ">
                    <div class="col-sm-2 p-1" v-if="!agregarNuevo">
                            <button class="btn btn-info" @click="agregarNuevo = true">
                                <i class="fas fa-plus"></i>
                            </button>
                    </div>
                </div>
       
                <div v-if="cargando" class="spinner-grow text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                </div>


                <form v-if="agregarNuevo">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Nombre Ciudad:</label>
                        <input type="text" class="form-control" id="NombreCiudad" placeholder="Nombre Ciudad" v-model="NombreCiudad">
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="ciudadActiva" v-model="ciudadActiva">
                        <label class="custom-control-label" for="customCheck1">Activo</label>
                    </div>

                    <button class="btn btn-danger m-2 " @click="agregarNuevo = false">
                        Cancelar
                    </button>

                    <button class="btn btn-success m-2" @click="agregarCiudad()">
                        Agregar
                    </button>
                </form>


                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th>Ciudad</th>
                            <th>Eliminar</th>
                            <th>Activo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(ciudad, index) in ciudades" :key="`fruit-${index}`" >
                            <td>{{ciudad.ciudad}} </td>
                            <td>
                                <button class="btn btn-danger" @click="eliminarCiudad(ciudad.id )"> 
                                    <i class="fas fa-trash-alt"></i> 
                                </button>                                

                            </td>
                            <td>
                                
                                <div v-if="ciudad.activo">
                                    <button class="btn btn-info" @click="toggleActivarCiudad(ciudad, 0)"> 
                                        <i class="fas fa-check"></i>
                                    </button>        

                                </div>
                                <div  v-else>
                                    <button class="btn btn-danger" @click="toggleActivarCiudad(ciudad, 1 )"> 
                                        <i class="fas fa-times"></i>
                                    </button>        

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>



            </div>
        </div>
    </div>
</template>

<script>
import firebase,{ database } from 'firebase'

    //const database = firebase.database();
    //const ciudadesRef = database().ref("Ciudades");

export default {

    name :'Ciudades',
    data() {
        return  {
            ciudades: [],
            cargando : true,
            agregarNuevo : false,
            NombreCiudad : "",
            ciudadActiva : 1

        }
    },
    methods :{
        ObtenerCiudades: function()
        {
            database().ref("/Ciudades").on("value", (snapshot)=>
            {
                this.ciudades = [];
                snapshot.forEach(ciudad => {
                    this.ciudades.push({
                        id : ciudad.key,
                        ciudad : ciudad.val().Nombre,
                        activo : ciudad.val().Activo
                    })
                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
        },
        
        agregarCiudad()
        {

            if(!this.NombreCiudad)
                return

           var  ciudad = {   Nombre : this.NombreCiudad, Activo : this.ciudadActiva
                        }
            var idCiudad = this.NombreCiudad.replace(" ", "")

            database().ref("/Ciudades/"+idCiudad).set ( ciudad ).then(()=>
            {
                this.$swal.fire(
                    'Ciudad Agregada!',
                    'Exito!',
                    'success'
                   )
                this.NombreCiudad = "";
                this.agregarNuevo = false
            })
            .catch((error)=>
            {
                this.$wal
                    .fire({
                    type: 'error',
                    title: 'Algo ha salido',
                    text: 'Error',
                    })
            })
        },
        eliminarCiudad(ciudadId)
        {
            if(!ciudadId)
                return
            const ciudadesRef = database().ref("Ciudades");
            ciudadesRef.child(ciudadId).remove();
        },
        
        toggleActivarCiudad(ciudad, activar)
        {
            if(!ciudad)
                return
            const ciudadesRef = database().ref("Ciudades");
            ciudadesRef.child(ciudad.id).update({
                Nombre : ciudad.ciudad,
                Activo : activar
            }).then(()=>
            {
                this.$swal.fire(
                    'Ciudad Actualizada!',
                    'Exito!',
                    'success'
                   )
            })

        },

        
    },
      mounted() {
        this.ObtenerCiudades();
    }
    
    
}
</script>


<style>

</style>
