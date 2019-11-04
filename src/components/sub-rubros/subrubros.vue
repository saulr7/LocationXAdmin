<template>
   
      
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-lg-9">
                      
                <h3 class="pt-2">Sub-Rubros</h3>

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
                    <div class="card mb-1 m-1">
                        <div class="card-body">
                            <h4>Nuevo SubRubro</h4>
                            <div class="row justify-content-center">
                                <div class="col-sm-12 ">
                                    <label for="formGroupExampleInput2">Catégoria: </label>
                                </div>
                                <div class="col-5">       
                                    <select class="custom-select" v-model="rubroSelected">
                                        <option v-for="(rubro, index) in rubros" :key="`entidad-${index}`" >
                                                {{rubro.Id}}
                                            </option>
                                    </select>
                                </div>
                            </div>
                          <div class="row justify-content-center p-1">
                                <div class="col-sm-12">
                                    <label for="formGroupExampleInput2">Nombre SubRubro: </label>
                                </div>
                                <div class="col-5">       
                                    <input type="text" class="form-control" id="Telefono" placeholder="Nombre" v-model="nuevoSubRubro">
                                </div>
                            </div>       
                          <div class="row justify-content-center p-1">
                              <button class="btn btn-success" @click="crear_subRubro()">
                                  Guardar
                              </button>
                            </div>                                                        
                            
                        </div>
                    </div>
                </div>



                <div class="card mb-1 m-1" v-for="(subRubro, index) in subRubros" :key="`fruit-${index}`"  >
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h4>
                                    {{subRubro.Id}}
                                </h4>
                            </div>
                        </div>
                        
                        <div class="row justify-content-center" v-for="(categoria, index2) in subRubro.Categorias" :key="`subrubro-${index2}`"  > 
                            <div class="col-sm-12 col-md-8">
                                
                                <div class="row ">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-1 infoIcon">
                                                <i class="fa fa-id-card"> </i>
                                            </div>
                                            <div class="col">
                                                <p class="text-left">
                                                    {{categoria.Nombre}}
                                                </p>
                                            </div>
                                            
                                        </div>
                                    </div>         
                                    <div class="col-3">
                                        <button class="btn btn-danger" @click="eliminar_subRubro(subRubro.Id, categoria.Nombre )"> 
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

export default {

    name: 'SubRubros',
    data(){
        return {
            subRubros : [],
            rubros : [],
            agregarNuevo :false,
            cargando:true,
            rubroSelected : "",
            nuevoSubRubro : ""
        }
    },
    methods : {

        obtener_subRubros()
        {
            database().ref("/SubRubros").on("value", (snapshot)=>
            {
                this.subRubros = []
                snapshot.forEach(subRubro=> {
                    this.subRubros.push(
                        {
                            Id : subRubro.key,
                            Categorias : subRubro.val()
                        })
                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
        },
        obtener_rubros()
        {
            database().ref("/RubrosV2").on("value", (snapshot)=>
            {
                this.rubros = []
                snapshot.forEach(rubro=> {
                    this.rubros.push({
                        Id : rubro.key,
                    })
                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
        },
        crear_subRubro()
        {
            if(!this.rubroSelected)
            {
                this.$swal.fire("Debes seleccionar un Rubro", 'Atención!',  'warning' )
                return;
            }
            if(!this.nuevoSubRubro)
            {
                this.$swal.fire("Debes agregar un nombre", 'Atención!',  'warning' )
                return;
            }

            var subRubroObjeto = {Nombre : this.nuevoSubRubro, Activo : true}
            this.agregarNuevo = false;
            database().ref("/SubRubros/"+this.rubroSelected+"/"+this.nuevoSubRubro).set(subRubroObjeto).then(()=>
            {
                this.$swal("SubRubro Agregado!", {  icon: "success", });
                this.agregarNuevo = false;

                // database().ref("/Negocios/"+this.nuevoSubRubro).set(subRubroObjeto).then(()=>
                // {
                // })
            })
        },
        eliminar_subRubro(subRubro, categoria)
        {

               this.$swal({
                title: "¿Seguro que deseas eliminar este subRubro?",
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
                    database().ref("/SubRubros/"+subRubro).child(categoria).remove().
                    then(() =>{
                        database().ref('/Negocios').child(categoria).remove().
                        then(()=>
                        {
                            this.$swal("Poof! Rubro elimado!", {  icon: "success", });

                        })
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
        this.obtener_subRubros();
        this.obtener_rubros();
    }

}
</script>
