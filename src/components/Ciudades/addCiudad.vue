<template>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <h3 class="pt-2">Ciudades</h3>

                <div class="row justify-content-start ">
                    <div class="col-sm-2 p-1">
                        <router-link to="/Ciudades">
                            <button class="btn btn-info">Ciudades</button>
                         </router-link>
                    </div>
                </div>

                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Nombre Ciudad:</label>
                        <input type="text" class="form-control" id="NombreCiudad" placeholder="Nombre Ciudad" v-model="NombreCiudad">
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="ciudadActiva" v-model="ciudadActiva">
                        <label class="custom-control-label" for="customCheck1">Activo</label>
                    </div>

                    <button class="btn btn-success mt-2" @click="agregarCiudad()">
                        Agregar
                    </button>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import firebase,{ database } from 'firebase'

export default {
    
    data(){
        return {
            NombreCiudad : "",
            ciudadActiva : 1
        }
    },
    methods :{

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
    }
}
</script>

