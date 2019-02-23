<template>
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-lg-9">
                      
                <h3 class="pt-2">Rubros</h3>

                <div class="row justify-content-end ">
                    <div class="col-sm-2 p-1" v-if="!agregarNuevo">
                            <button class="btn btn-info" @click="agregarNuevo = true">
                                <i class="fas fa-plus"></i>
                            </button>
                    </div>
                    <div class="col-sm-2 p-1" v-if="agregarNuevo">
                            <button class="btn btn-danger" @click="agregarNuevo = false">
                                <i class="fas fa-times"></i>
                            </button>
                    </div>
                </div>
                <div v-if="cargando" class="spinner-grow text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                </div>

                <div v-if="agregarNuevo ">
                    <addRubro>
                    </addRubro>
                </div>



                <div class="card mb-1 m-1" v-for="(rubro, index) in rubros" :key="`fruit-${index}`"  >
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h4>
                                    {{rubro.Id}}
                                </h4>
                            </div>
                        </div>
                        
                        <div class="row"> 
                            <div class="col-sm-12 col-md-8">
                                
                                <div class="row ">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-1 infoIcon">
                                                <i class="fa fa-id-card"> </i>
                                            </div>
                                            <div class="col">
                                                <p class="text-left">
                                                    {{rubro.Nombre}}
                                                </p>
                                            </div>
                                            
                                        </div>
                                    </div>                   
                                </div>                              

                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-1 infoIcon">
                                                <i class="fas fa-file-alt"></i>
                                            </div>
                                            <div class="col">
                                                    <p class="text-left">
                                                        {{rubro.Descripcion}}
                                                    </p>
                                            </div>
                                        </div>
                                    </div>                    
                                </div>       

                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-1 infoIcon">
                                                <i class="fas fa-image"></i>
                                            </div>
                                            <div class="col">
                                                    <p class="text-left">
                                                        {{rubro.UrlImagen}}
                                                    </p>
                                            </div>
                                        </div>
                                    </div>                    
                                </div>       

                            </div>
                            <div class="col">
                                <div class="row justify-content-center">
                                    <div   class="col-3">
                                        <button class="btn btn-danger" @click="eliminar_rubro(rubro.Id )"> 
                                            <i class="fas fa-trash-alt"></i> 
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

import firebase, {database} from 'firebase';
import addRubro from '@/components/rubros/addRubro';

export default {
    
    name: 'Rubros',
    components :{
        'addRubro' : addRubro
    },
    data(){
        return {

            rubros : [],
            cargando : true,
            agregarNuevo : false
        }
    },
    methods :
    {
        obtener_rubros()
        {
            database().ref("/RubrosV2").on("value", (snapshot)=>
            {
                this.rubros = []
                snapshot.forEach(rubro=> {
                    this.rubros.push({
                        Id : rubro.key,
                        Nombre : rubro.val().Nombre,
                        Descripcion : rubro.val().Descripcion,
                        UrlImagen : rubro.val().UrlImagen
                    })
                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
        },
        eliminar_rubro(rubroId )
        {
            console.log(rubroId);
             this.$swal({
                title: "¿Seguro que deseas eliminar este rubro?",
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
                    database().ref("/RubrosV2").child(rubroId).remove().
                    then(() =>{
                        this.$swal("Poof! Rubroo elimado!", {  icon: "success", });
                    })
                    .catch((error)=>{
                        this.$swal.fire(error, 'Error!',  'error' )
                    })
                }
                });
        }
    },
    mounted()
    {
        this.obtener_rubros();
    }
}

</script>


<style>
.infoIcon{
    color: #17a2b8;
    font-size: 25px;
}
</style>
