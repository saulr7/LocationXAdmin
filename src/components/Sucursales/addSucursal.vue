<template>
    
    <div class="container">
        <div class="row justify-content-center">

            <div class="col">

                <div class="row m-2">
                    <div class="col">
                        <h4>
                            Agregar Sucursal
                        </h4>
                    </div>
                </div>
                <div class="row justify-content-start ">
                    <div class="col-sm-2 p-1" >
                        <router-link to="/entidades">
                                <button class="btn btn-info" >
                                    Entidades
                                </button>
                        </router-link>
                    </div>
                </div>
                <div class="card mb-1" >    
                        <div class="card-body">
                            
                            <div class="row ">
                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fa-id-card"> </i>
                                        </div>
                                        <div class="col">
                                            <div >
                                                <input class="form-control" type="text" placeholder="Nombre" v-model="sucursal.Nombre">
                                            </div>                                    
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fa-phone"> </i>
                                        </div>
                                        <div class="col">
                                            <div >
                                                <input class="form-control" type="tel" placeholder="Telefono" v-model="sucursal.Telefono">
                                            </div>                                    
                                            
                                        </div>
                                    </div>
                                </div>  
                                 

                               <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fa-id-card"> </i>
                                        </div>
                                        <div class="col">

                                            <div class="form-group">
                                                <label for="comment">Lunes A Jueves</label>
                                                <input class="form-control mb-1" type="text" placeholder="De 8AM a 5PM" v-model="sucursal.Horarios.LunesAJueves">
                                            </div>

                                            <div class="form-group">
                                                <label for="comment">Viernes</label>
                                                <input class="form-control mb-1" type="text" placeholder="De 8AM a 4PM" v-model="sucursal.Horarios.Viernes">
                                            </div>
                                            <div class="form-group">
                                                <label for="comment">Sábados </label>
                                                <input class="form-control mb-1" type="text" placeholder="De 8AM a 12M" v-model="sucursal.Horarios.Sabados">
                                            </div>

                                            <div class="form-group">
                                                <label for="comment">Domingos</label>
                                                <input class="form-control mb-1" type="text" placeholder="Cerrado" v-model="sucursal.Horarios.Domingos">
                                            </div>                                            
                                            
                                        </div>
                                    </div>
                                </div>     

                               <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fa-id-card"> </i>
                                        </div>
                                        <div class="col">

                                            <div class="form-group">
                                                <label for="comment">Latitud</label>
                                                <input class="form-control mb-1" type="number" placeholder="-1018181" v-model="sucursal.Cordenadas.Latitud">
                                            </div>

                                            <div class="form-group">
                                                <label for="comment">Longitud</label>
                                                <input class="form-control mb-1" type="number" placeholder="181918" v-model="sucursal.Cordenadas.Longitud">
                                            </div>
                                    
                                            
                                        </div>
                                    </div>
                                </div>     

                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fas fa-file-alt"></i>
                                        </div>
                                        <div class="col">
                                            <div >
                                                <div class="form-group">
                                                    <textarea class="form-control" rows="5" placeholder="Dirección" v-model="sucursal.Direccion">
                                                    </textarea>
                                                </div>
                                            </div>                                    
                                            
                                        </div>
                                    </div>
                                </div>                                
   
                        
                                                             

                            </div>
                            <div class="row justify-content-end">
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <router-link to="/entidades">
                                                <button  class="btn btn-outline-danger">
                                                    Cancelar
                                                </button>
                                            </router-link>

                                        </div>
                                        <div class="col">
                                            <button @click="Guradar_Sucursal()" class="btn btn-outline-success">
                                                Guardar
                                            </button>

                                        </div>                              
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        </div>

    </div>
</template>


<script>

import firebase,{ database } from 'firebase'


export default {

name: 'addSucursal',
    data(){
        return{
            entidadId : this.$route.params.entidadId,
            sucursal : {
                Direccion: "",
                Nombre: "",
                Telefono: "",
                Horarios: {
                    LunesAJueves : "",
                    Viernes : "",
                    Sabados : "",
                    Domingos : ""
                },
                Cordenadas : {
                    Latitud  : "",
                    Longitud : ""
                }
            },
            editarSucursal : false,

        }
    },
    methods : {
        Guradar_Sucursal()
        {
            console.log(this.sucursal);
            if (!this.entidadId)
                return

            try {
                
                this.validar_datos_sucursal();

                var sucursalId = this.sucursal.Nombre.replace(" ", "");
                database().ref("/Sucursales/"+this.entidadId).child(sucursalId).set(this.sucursal)
                .then(()=>{
                    this.Limpiar_Campos();
                    this.$swal.fire("Sucursal agregada exitosamente", 'Exito!',  'success' )  
                })
                .catch((error)=>{
                    this.$swal.fire(error, 'Atención!',  'warning' )
                })
            } catch (error) {
                  this.$swal.fire(error, 'Atención!',  'warning' )
            }

        },
        validar_datos_sucursal()
        {
            if(!this.sucursal.Nombre)
                throw "Es necesario el nombre de la sucursal"
            if(!this.sucursal.Direccion)
                throw "Es necesario la dirección de la sucursal"
        },
        Limpiar_Campos()
        {
            this.sucursal.Nombre = "";
            this.sucursal.Direccion = "";
            this.sucursal.Telefono = "";
            this.sucursal.Horarios.LunesAJueves = "";
            this.sucursal.Horarios.Viernes = "";
            this.sucursal.Horarios.Sabados = "";
            this.sucursal.Horarios.Domingos = "";
            this.sucursal.Cordenadas.Latitud = "";
            this.sucursal.Cordenadas.Longitud = "";
            
        }

    },
    mounted(){
    }
    
    
}
</script>



<style>
.infoIcon{
    color: #17a2b8;
    font-size: 25px;
}
</style>

