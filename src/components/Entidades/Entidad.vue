<template>
    <div class="container mt-2" >
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-12 col-lg-9">

                <div class="row justify-content-between p-3">
                    <router-link to="/entidades">
                            <button class="btn btn-info" >
                                Entidades
                            </button>
                    </router-link>

                    <router-link to="/addentidad">
                            <button class="btn btn-info" >
                                <i class="fas fa-plus"></i>
                            </button>
                    </router-link>
                </div>


                <div class="card mb-1" v-for="(entidad,key) in entidades" :key="`entidad-${key}`" >    
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h4>
                                        {{entidadId}}
                                    </h4>
                                </div>
                            </div>
                            
                            <div class="row ">

                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fa-id-card"> </i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Nombre}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad">
                                                <input class="form-control" type="text" placeholder="Nombre" v-model="entidad.Nombre">
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
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Lema}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad">
                                                <input class="form-control" type="text" placeholder="Lema" v-model="entidad.Lema">
                                            </div>                                    
                                            
                                        </div>
                                    </div>
                                </div>                                

                                <div class="col-md-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fas fa-map-marked-alt"></i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Direccion}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad" >
                                                <input class="form-control" type="text" placeholder="Dirección" v-model="entidad.Direccion">
                                            </div>                                                                        
                                        </div>
                                    </div>
                                </div>  

                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fa-envelope"> </i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Correo}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad">
                                                <input class="form-control" type="text" placeholder="Default input" v-model="entidad.Correo">
                                            </div>                                                                        
                                        </div>
                                    </div>
                                </div>                        
                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fas fa-mobile-alt"></i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Telefono}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad">
                                                <input class="form-control" type="text" placeholder="Default input" v-model="entidad.Telefono">
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fab fa-safari"></i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.PaginaWeb}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad">
                                                <input class="form-control" type="text" placeholder="Página web" v-model="entidad.PaginaWeb">
                                            </div>                                                                              
                                        </div>
                                    </div>
                                </div>                        
                            <!-- </div>           -->
                            <!-- <div class="row p-2"> -->
                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fas fa-truck"> </i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    <i v-if="entidad.ServicioADomicilio" class="fas fa-check"> </i>
                                                    <i v-else class="fas fa-times"> </i>
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad">
                                                <div class=" custom-checkbox ">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="entidad.ServicioADomicilio">
                                                    <label class="custom-control-label" for="customCheck1">A Domicilio</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                             <i class="fas fa-image"></i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.UrlImagen}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad">
                                                <input class="form-control" type="text" placeholder="Url Imagen" v-model="entidad.UrlImagen">
                                            </div>                                    
                                        </div>
                                    </div>
                                </div>                        

                                <div class="col-md-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fas fa-file-alt"></i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Descripcion}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad" >
                                                <input class="form-control" type="check" placeholder="Página web" v-model="entidad.Descripcion">
                                            </div>                                                                        
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fas fa-compass"></i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Cordenadas.Longitud}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad" >
                                                <input class="form-control" type="number" placeholder="Longitud" v-model="entidad.Cordenadas.Longitud">
                                            </div>                                                                        
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fas fa-compass"></i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <p class="text-left">
                                                    {{entidad.Cordenadas.Latitud}}
                                                </p>
                                            </div>
                                            <div v-if="editarEntidad" >
                                                <input class="form-control" type="number" placeholder="Longitud" v-model="entidad.Cordenadas.Latitud">
                                            </div>                                                                        
                                        </div>
                                    </div>
                                </div> 
                                                                           

                                <div class="col-md-6 pb-3">
                                    <div class="row">
                                        <div class="col-2 infoIcon">
                                            <i class="fa fa-phone"> </i>
                                        </div>
                                        <div class="col">
                                            <div v-if="!editarEntidad">
                                                <div v-for="(telefono, index) in entidades[0].Telefonos" :key="`entidad-${index}`" class="text-left">
                                                    <div class="row">
                                                        <div class="col">
                                                            {{telefono}}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="editarEntidad" >
                                                <div class="row">
                                                    <div class="col-md-8"> 
                                                        <input type="phone" class="form-control m-1" id="PaginaWeb" placeholder="Telefono" v-model="nuevoTelefono">
                                                    </div>
                                                    <div class=" col-md-2">
                                                        <button class="btn btn-info" @click="addTelefono()">
                                                            <i class="fa fa-plus" />
                                                        </button>
                                                     </div>
                                                     <div class="col-12">

                                                         <div v-for="(telefono, index) in entidades[0].Telefonos" :key="`entidad-${index}`" class="text-left">
                                                            <div class="row">
                                                                    <div class="col">
                                                                        {{telefono}}
                                                                    </div>
                                                                    <div class="col-5">
                                                                        <i @click="eliminar_telefono(index)" class="fas fa-times"> </i>
                                                                    </div>

                                                            </div>
                                                        </div>
                                                     </div>
                                                </div> 
                                            </div>   
                                        </div>
                                    </div>
                                </div>                        
                            </div>       
                            <div class="row justify-content-end">
                                <div v-if="!editarEntidad"  class="col-3">
                                    <button @click="editarEntidad= true" class="btn btn-outline-info">
                                        Editar
                                    </button>
                                </div>
                                <div v-if="editarEntidad" class="col">
                                    <div class="row">
                                        <div class="col">
                                            <button @click="editarEntidad= false" class="btn btn-outline-danger">
                                                Cancelar
                                            </button>

                                        </div>
                                        <div class="col">
                                            <button @click="ActualizarEntidad(key)" class="btn btn-outline-success">
                                                Guardar
                                            </button>

                                        </div>                              
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center mt-3">
                        <div class="col-sm-2 p-1" >
                            <h4>Sucursales</h4>
                        </div>
                    </div>
                    <div class="row justify-content-end ">
                        <div class="col-sm-2 p-1" >
                            <button @click="add_sucursal()" class="btn btn-info" >
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <sucursales>
                    </sucursales>   
            </div>                    
        </div>
    </div>
</template>

<script>

import firebase,{ database } from 'firebase'
import sucursales from "@/components/Sucursales/Sucursales";

export default {
 name : 'entidad',
   components: {
      'sucursales' :  sucursales,
        props : [this.entidadId]
        
    },
    data(){
        return {
            entidadId : this.$route.params.entidadId,
            editarEntidad: this.$route.params.editar,
            cargando : true,
            nuevoTelefono: "",
            entidades: [],
            
        }
    },
    methods:{
        ObtenerEntidades: function()
        {
            database().ref("/Entidades").child(this.entidadId).on("value", (entidad)=>
            {
                this.entidades = [];
                this.entidades.push({
                        Correo: entidad.val().Correo,
                        Descripcion: entidad.val().Descripcion,
                        Direccion: entidad.val().Direccion,
                        Nombre: entidad.val().Nombre,
                        Negocio : entidad.val().Negocio || "",
                        Lema : entidad.val().Lema,
                        PaginaWeb: entidad.val().PaginaWeb,
                        ServicioADomicilio: entidad.val().ServicioADomicilio,
                        Telefono: entidad.val().Telefono,
                        UrlImagen: entidad.val().UrlImagen,
                        Cordenadas : ( entidad.val().Cordenadas) ?  entidad.val().Cordenadas : ( { Latitud : 0, Longitud :0} ),
                        Telefonos: (entidad.val().Telefonos) ? entidad.val().Telefonos : []


                    })

                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
        },
        ActualizarEntidad(key)
        {
            console.log(this.entidades[0]);
            database().ref("/Entidades").child(this.entidadId).set(this.entidades[0])
            .then(()=>
            {
                var negocioUpdate = { Nombre: this.entidades[0].Nombre, Descripcion : this.entidades[0].Descripcion }
                console.log(negocioUpdate);
                
                if(!this.entidades[0].Negocio)
                {
                    this.$swal.fire("Entidad Actualizada exitosamente", 'Exito!',  'success' )  
                    return;
                }

                database().ref("/Negocios/"+this.entidades[0].Negocio).child(this.entidadId).set( negocioUpdate ).then(()=>
                {
                    this.$swal.fire("Entidad Actualizada exitosamente", 'Exito!',  'success' )  
                })
            })
            this.editarEntidad = false;
        },
        addTelefono(){
            if (this.nuevoTelefono==0)
                return

            this.entidades[0].Telefonos.push(this.nuevoTelefono)
            this.nuevoTelefono = "";
        },
        eliminar_telefono(index){
            this.entidades[0].Telefonos.splice(index, 1);
        },
        add_sucursal()
        {
            this.$router.push({name : 'addsucursal', params : {entidadId: this.entidadId }})
        }
    },
    mounted(){
        this.ObtenerEntidades()
    },
    beforeMount()
    {
    }


}
</script>

<style>
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.infoIcon{
    color: #17a2b8;
    font-size: 25px;
}
</style>
