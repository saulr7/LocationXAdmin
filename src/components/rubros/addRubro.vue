<template>
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
    
                <div class="form-group">
                    <label for="formGroupExampleInput">Nombre Rubro:</label>
                    <input type="text" class="form-control" id="NombreCiudad" placeholder="Nombre" v-model="rubro.Nombre">
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput">Descripcion Rubro:</label>
                    <input type="text" class="form-control" id="NombreCiudad" placeholder="Descripcion" v-model="rubro.Descripcion">
                </div>

                <div class="form-group">

                    <select class="custom-select" v-model="rubro.UrlImagen">
                        <option v-bind:value="imagen.Nombre" v-for="(imagen, index) in rubrosImagenes" :key="`entidad-${index}`" >
                                {{imagen.Id}}
                            </option>
                    </select>

                    <!-- <label for="formGroupExampleInput">Url Imagen:</label>
                    <input type="text" class="form-control" id="NombreCiudad" placeholder="Url Imagen" v-model="rubro.UrlImagen"> -->
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <button class="btn btn-success mt-2" @click="agregar_rubro()">
                            Agregar
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>

<script>

import firebase, {database} from 'firebase';
import { error } from 'util';
import { throws } from 'assert';

export default {

    name : 'AddRubro',

    data(){
        return {
            rubro :{
                    Nombre : "",
                    Descripcion : "",
                    FechaAgregado : + new Date(),
                    UrlImagen : ""
                },
            rubrosImagenes : [],
            rubroImagenSelected : ""
        }
    },
    methods :
    {
        agregar_rubro()
        {

            try {
                this.validar_datos_rubro();
                var rubroId = this.rubro.Nombre.replace(" ", "");
                database().ref("/RubrosV2/" +rubroId).set(this.rubro)
                .then(() =>
                {
                    this.limpiar_campos();
                    this.$swal.fire("Rubro agregado exitosamente", 'Exito!',  'success' )
                })
                .catch((error)=>
                {
                    this.$swal.fire("Algo ha salido mal", 'Error!',  'error' )
                })
                
            } catch (error) {
                this.$swal.fire(error, 'Error!',  'error' )
            }


        },
        obtener_imagenes_rubros()
        {
            database().ref("/Imagenes/Rubros").on("value", (snapshot)=>
            {
                this.rubrosImagenes = []
                snapshot.forEach(imagen=> {
                    console.log(imagen.key, imagen.val());
                    this.rubrosImagenes.push(
                        {
                            Id : imagen.key,
                            Nombre : imagen.val()
                        })
                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
        },

        validar_datos_rubro()
        {
            if(!this.rubro.Nombre)
                throw "El nombre no puede estar vacío"

            if(!this.rubro.Descripcion)
                throw "La Descripcion no puede estar vacía"
        },
        limpiar_campos()
        {
            this.rubro.Nombre = "";
            this.rubro.Descripcion = "";
            this.rubro.UrlImagen = "";
        }

    },
    mounted()
    {
        this.obtener_imagenes_rubros()
    }

    
}
</script>

