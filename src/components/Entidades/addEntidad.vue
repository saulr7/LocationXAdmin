<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class=" col-lg-8">
                <h3 class="pt-2">Agregar Entidad</h3>

                <div class="row justify-content-start ">
                    <div class="col-sm-2 p-1" >
                        <router-link to="/entidades">
                                <button class="btn btn-info" >
                                    Entidades
                                </button>
                        </router-link>
                    </div>
                </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput">Nombre: </label>

                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="Nombre" placeholder="Nombre" v-model="nuevaEntidad.Nombre">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput">Lema: </label>

                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="Nombre" placeholder="Lema" v-model="nuevaEntidad.Lema">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                            <label for="formGroupExampleInput2">Descripción: </label>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="Descripcion" placeholder="Descripcion" v-model="nuevaEntidad.Descripcion">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                            <label for="formGroupExampleInput2">Dirección: </label>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="Descripcion" placeholder="Dirección" v-model="nuevaEntidad.Direccion">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput2">Catégoria: </label>
                            </div>
                            <div class="col">       
                                <select class="custom-select" v-model="nuevaEntidad.Negocio">
                                    <option v-bind:value="negocio.Nombre" v-for="(negocio, index) in negocios" :key="`entidad-${index}`" >
                                            {{negocio.Nombre}}
                                        </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput">Teléfono: </label>
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" id="Telefono" placeholder="Telefono" v-model="nuevaEntidad.Telefono">
                            </div>
                        </div>                        
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput">Correo: </label>
                            </div>
                            <div class="col">
                                <input type="email" class="form-control" id="Correo" placeholder="Correo" v-model="nuevaEntidad.Correo">
                            </div>
                        </div>                                
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput2">Pagina Web: </label>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="PaginaWeb" placeholder="Pagina Web" v-model="nuevaEntidad.PaginaWeb">
                            </div>
                        </div>                                
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput2">Url Imgane: </label>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" id="PaginaWeb" placeholder="Url Imagen" v-model="nuevaEntidad.UrlImagen">
                            </div>
                        </div>                                
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2 ">
                                <label for="formGroupExampleInput2" class="align-bottom">Cordenadas: </label>
                            </div>
                            <div class="col">
                                <label >Latitud: </label>
                                <input type="number" class="form-control"  placeholder="-1018181" v-model="nuevaEntidad.Cordenadas.Latitud">
                            </div>
                              <div class="col">
                                  <label >Longitud: </label>
                                <input  class="form-control" type="number" placeholder="181918" v-model="nuevaEntidad.Cordenadas.Longitud">
                            </div>
                        </div>                                
                    </div>                    


                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-2  ">
                                <label for="formGroupExampleInput2">Telefonos: </label>
                            </div>
                            <div class="col">      
                                <div class="row">
                                    <div class="col-md-8"> 
                                        <input type="text" class="form-control m-1" id="PaginaWeb" placeholder="Telefono" v-model="telefonoList">
                                    </div>
                                    <div class=" col-md-2">
                                        <button class="btn btn-info" @click="addTelefono()">
                                            <i class="fa fa-plus" />
                                        </button>

                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div  v-for="(telefono, index) in telefonos" :key="`entidad-${index}`">
                            <div class="row justify-content-center">
                                <div class="col-2"> 
                                    {{telefono}}
                                    
                                </div>
                            </div>                                 

                        </div>

                    </div>                    
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="ServicioADomicilio" v-model="nuevaEntidad.ServicioADomicilio">
                        <label class="custom-control-label" for="ServicioADomicilio">Servicio A Domicilio</label>
                    </div>

                    <div v-if="!mostrarCiudades" 
                        class="row justify-content-center p-3">
                        <div class="col">
                            <button @click="mostrarCiudades = true"
                            type="button" class="btn btn-outline-primary">
                                Mostrar Ciudades
                            </button>
                        </div>
                    </div>

                    <div v-if="mostrarCiudades" class="form-group col-lg-8 offset-lg-2">
                        <label for="formGroupExampleInput2">Ciudades</label>

                        <div class="row justify-content-center p-3">
                            <div class="col">
                                <button @click="mostrarCiudades = false"
                                    type="button" class="btn btn-outline-danger">
                                        Ocultar
                                </button>
                            </div>
                        </div>
                        

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Ciudad</th>
                                    <th>Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table" v-for="(ciudad, index) in ciudades" :key="`entidad-${index}`">
                                    <td>{{ciudad.Nombre}}  </td>
                                    <td>
                                        <input class="form-check-input" type="checkbox" v-bind:id="ciudad.Nombre" v-bind:value="ciudad  " v-model="checkedCiudades" >    
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>                    


                    <div class="form-group mt-4">
                            <button class="btn btn-success"  :disabled="disableBtn" @click="guardarEntidad()">
                                Guardar
                            </button>
                    </div>                          


            </div>
        </div>
    </div>
</template>

<script>

import firebase,{ database } from 'firebase'
import { throws } from 'assert';
import { error } from 'util';

export default {
    name: 'addEntidad',
    data(){
        return {
            negocios : [],
            ciudades : [],
            checkedCiudades : [],
            ciudadesToSave: [],
            telefonos : [],
            telefonoList: 0,
            entidadtoSave : [],
            mostrarCiudades: false,
            disableBtn: false,
            nuevaEntidad : {
                        Correo: "",
                        Descripcion: "",
                        Direccion : "",
                        Nombre: "",
                        Negocio: "",
                        Lema : "",
                        PaginaWeb: "", 
                        Telefono:  "",
                        UrlImagen:  "",
                        Telefonos: [],
                        Negocio: "",
                        ServicioADomicilio : false,
                        Cordenadas : {
                            Latitud  : "",
                            Longitud : ""
                            }
                        }
        }
    },
        methods:{
        ObtenerNegocios: function()
        {
            database().ref("/Negocios").on("value", (snapshot)=>
            {
                this.negocios = [];
                snapshot.forEach(negocio => {
                    this.negocios.push(
                        {Nombre : negocio.key}
                    )
                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
            
        },
        ObtenerCiudades: function()
        {
            database().ref("/Ciudades").on("value", (snapshot)=>
            {
                this.ciudades = [];
                snapshot.forEach(ciudad => {
                    this.ciudades.push(
                        {
                            Nombre : ciudad.key,
                            Ciudad : ciudad.val()
                        
                        }
                    )
                });
                this.cargando = false
            }, (error)=>{
                this.cargando = false
            })
            
        },
        guardarEntidad()
        {

            try
             {
                 this.disableBtn = true;
               
                this.ValidarDataNuevaEntidad();

                this.nuevaEntidad.Telefonos = this.telefonos;

                
                database().ref("/Entidades/"+ this.nuevaEntidad.Nombre.replace(/\s/g,'') ).set ( this.nuevaEntidad )
                .then(()=>
                {
                    this.crearEntidadEnNegocios();
                    
                })
                .catch(()=>
                {
                    this.disableBtn = false;
                })

                
            } catch (error) {
                this.$swal.fire(error, 'Atención!',  'warning' )
                this.disableBtn = false;
            }

        },
        addTelefono(){
            if (this.telefonoList==0)
                return
            this.telefonos.push(this.telefonoList)
            this.telefonoList = 0;
        },
        crearEntidadEnNegocios(){
            if(!this.nuevaEntidad.Negocio)
            {
                this.$swal.fire('Debes seleccionar un categoria de negocio','Atención!', 'warning')
                return;
            }

            var entidadNegocio = {
                    Descripcion : this.nuevaEntidad.Descripcion,
                    Nombre : this.nuevaEntidad.Nombre,
                    Entidad : this.nuevaEntidad.Nombre.replace(/\s/g,''),
                    UrlImagen : " "
            }

            var rutaNuevoNegocio = this.nuevaEntidad.Negocio+"/" +entidadNegocio.Entidad;

            database().ref("/Negocios/"+ rutaNuevoNegocio ).set ( entidadNegocio ).then(()=>{

                this.checkedCiudades.forEach(ciudad => {
                
                database().ref("/Negocios/"+ rutaNuevoNegocio +"/Ciudades/"+ciudad.Nombre).set ( ciudad.Ciudad )
                
                })  
                    this.$swal.fire( 'Se ha agregado el negocio correctamente', 'Exito',  'success'  )
                    this.disableBtn = false;
                })
                .catch((error)=>
                {
                    this.$swal.fire('Algo ha salido mal',  error,  'error' )
                    this.disableBtn = false;
                });            
        },
        ValidarDataNuevaEntidad()
        {   

           if(!this.nuevaEntidad.Nombre)
                throw "Es necesario el nombre del negocio"
            
            if(!this.nuevaEntidad.Descripcion)
                throw "Es necesaria la descripcion del negocio"        

            if(!this.nuevaEntidad.Correo)
                throw "Es necesaria la dirección de correo"        

           if(this.nuevaEntidad.Telefono==0)
                throw "Es necesario el número de teléfono del negocio"        

           if(!this.nuevaEntidad.Negocio)
                throw "Es necesario seleccionar una catégoria para el negocio"        
        }
    },
    mounted(){
        this.ObtenerNegocios()
        this.ObtenerCiudades()
    }
}
</script>

