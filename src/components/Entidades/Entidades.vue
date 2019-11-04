<template>
    <div class="container" >
        <div class="row justify-content-center">
            <div class="col-sm-12 col-lg-10">


            <h3 class="pt-2">Entidades</h3>

            <div class="row justify-content-end ">
                <div class="col-sm-2 p-1" >
                    <router-link to="/addentidad">
                            <button class="btn btn-info" >
                                <i class="fas fa-plus"></i>
                            </button>
                    </router-link>
                </div>
            </div>


             <div class="card mb-1 m-1" v-for="(entidad,key) in entidades" :key="`entidad-${key}`" >
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h4>
                                {{entidad.id}}
                            </h4>
                        </div>
                    </div>
                    
                    <div class="row"> 
                        <div class="col-sm-12 col-md-8">
                            
                            <div class="row ">
                                <div class="col">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fa fa-user"> </i>
                                        </div>
                                        <div class="col">
                                            <p class="text-left">
                                                {{entidad.Nombre}}
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>                   
                            </div>                              

                            <div class="row">
                                <div class="col">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fa fa-card"> </i>
                                        </div>
                                        <div class="col">
                                                <p class="text-left">
                                                    {{entidad.Descripcion}}
                                                </p>
                                        </div>
                                    </div>
                                </div>                    
                            </div>       

                        </div>
                        <div class="col">
                            <div class="row justify-content-center">
                                <div   class="col-3">
                                    <button  @click="ver_Entidad(entidad.id)" class="btn btn-success">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                </div>
                                <div   class="col-3">
                                    <button @click="ver_Entidad(entidad.id, true)" class="btn btn-info">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </div>
                                <div   class="col-3">
                                    <button @click="eliminar_entidad(entidad.id)" class="btn btn-danger">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>                                                                

                            </div>
                        </div>

                    </div>
                </div>
            </div> 
       
            <div v-if="cargando" class="spinner-grow text-warning" role="status">
                <span class="sr-only">Loading...</span>
            </div>


            </div>
        </div>
        
    </div>
</template>


<script>

import firebase,{ database } from 'firebase'
import { ECONNRESET } from 'constants';
import { error } from 'util';

export default {
    name : 'entidades',
    data(){
        return {
            cargando : true,
            entidades: [],
            editarEntidad: false,
            entidadKey : [],
            entidarEntidad : {
                            id : '',
                            Correo: '',
                            Descripcion: '',
                            Nombre: '',
                            PaginaWeb: '',
                            ServicioADomicilio: false,
                            Telefono: '',
                            UrlImagen: '',
                            Telefonos: []
                        }
        }
    },
    methods:{
        ObtenerEntidades: function()
        {
            database().ref("/Entidades").on("value", (snapshot)=>
            {
                this.entidades = [];
                snapshot.forEach(entidad => {
                    this.entidades.push({
                        id : entidad.key,
                        Descripcion: entidad.val().Descripcion,
                        Nombre: entidad.val().Nombre

                    })

                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
        },
        ver_Entidad(entidadId, editar= false)
        {
            this.$router.push({name: 'entidad', params: {entidadId:entidadId, editar}})
        },
        eliminar_entidad(entidadId){
            
            this.$swal({
                title: "¿Seguro que deseas eliminar esta entidad?",
                text: "Esta acción no se podrá revertir!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancela',
                showCloseButton: true,
                showLoaderOnConfirm: true
                })
                .then((result) => {

                if (result.value) {
                    database().ref("/Entidades").child(entidadId).remove().
                    then(() =>{
                        database().ref("/Negocios").child(entidadId).remove().
                        then(()=>
                        {
                            database().ref("/Negocios").child(entidadId).remove().
                            then(()=>{
                                this.$swal("Poof! Entidad elimada!", {  icon: "success", });

                            })
                        })
                    })
                    .catch((error)=>{
                        this.$swal.fire(error, 'Error!',  'error' )
                    })
                }
                });

            
        }
    },
    mounted(){
        this.ObtenerEntidades()
    }


}
</script>

<style>
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>

