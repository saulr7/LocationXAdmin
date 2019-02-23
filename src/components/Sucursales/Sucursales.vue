<template>
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="col-sm-12 col-md-11 col-lg-9">

                    <div class="card mb-1" v-for="(sucursal,key) in sucursales" :key="`sucursal-${key}`" >    
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h4>
                                        {{sucursal.Id}}
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
                                            <div v-if="!editarsucursal">
                                                <p class="text-left">
                                                    {{sucursal.Nombre}}
                                                </p>
                                            </div>
                                            <div v-if="editarsucursal">
                                                <input class="form-control" type="text" placeholder="Default input" v-model="sucursal.Nombre">
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
                                            <div v-if="!editarsucursal">
                                                <p class="text-left">
                                                    {{sucursal.Telefono}}
                                                </p>
                                            </div>
                                            <div v-if="editarsucursal">
                                                <input class="form-control" type="text" placeholder="Default input" v-model="sucursal.Telefono">
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
                                            <div v-if="!editarsucursal">
                                                <p class="text-left">
                                                    {{sucursal.Direccion}}
                                                </p>
                                            </div>
                                            <div v-if="editarsucursal">
                                                <input class="form-control" type="text" placeholder="Default input" v-model="sucursal.Direccion">
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
                                            <div v-if="!editarsucursal">
                                                <ul>
                                                    <li>
                                                       Lunes A Jueves:  {{sucursal.Horarios.LunesAViernes}}
                                                    </li>
                                                    <li>
                                                       Viernes:   {{sucursal.Horarios.Viernes}}
                                                    </li>
                                                    
                                                    <li>
                                                       Sábado:  {{sucursal.Horarios.Sabados}}
                                                    </li>
                                                    <li>
                                                       Domingos:  {{sucursal.Horarios.Domingos}}
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div v-if="editarsucursal">
                                                <input class="form-control" type="text" placeholder="Default input" v-model="sucursal.Horarios">
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
</template>

<script>
    
import firebase,{ database } from 'firebase'

export default {


    name : 'sucursales',
    data (){
        return {
            sucursales : [],
            editarsucursal: false,
            entidadId : this.$route.params.entidadId
        }
    },

    methods:{
        obtener_sucursales(){
            database().ref("/Sucursales").child(this.entidadId).on("value", (snapshot)=>
            {
                this.sucursales= [];
                snapshot.forEach(sucursal=> {
                    this.sucursales.push({
                        Id : sucursal.key,
                        Direccion: sucursal.val().Direccion,
                        Horarios: sucursal.val().Horarios,
                        Nombre: sucursal.val().Nombre,
                        Telefono: sucursal.val().Telefono
                    })

                });
            })
        }
    },
    mounted(){
        this.obtener_sucursales();
        console.log(this.$route.params.entidadId)
    }
}
</script>

<style>
.infoIcon{
    color: #17a2b8;
    font-size: 25px;
}
</style>

