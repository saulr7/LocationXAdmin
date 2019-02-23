import Vue from 'vue'
import Router from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2'


import HeaderComponent from '@/components/Header'
import Home from '@/components/Home'
import Ciudades from '@/components/Ciudades'
import addCiudad from '@/components/Ciudades/addCiudad'
import entidades from '@/components/Entidades/Entidades'
import addEntidad from "@/components/Entidades/addEntidad";
import entidad from "@/components/Entidades/Entidad";
import sucursales from "@/components/Sucursales/Sucursales";
import addSucursal from "@/components/Sucursales/addSucursal";
import Rubros from "@/components/rubros/rubros";
import AddRubro from "@/components/rubros/addRubro";
import SubRubros from "@/components/sub-rubros/subrubros";





Vue.use(Router)
Vue.use(VueSweetalert2);

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ciudades',
      name: 'Ciudades',
      component: Ciudades
    },
    {
      path: '/addCiudad',
      name: 'addCiudad',
      component: addCiudad
    },
    {
      path: '/entidades',
      name: 'entidades' ,
      component: entidades
    },
    {
      path: '/addentidad',
      name : 'addentidad',
      component: addEntidad
    },
    {
      path: '/entidad/:entidadId',
      name : 'entidad',
      component: entidad
    },

    {
      path: '/sucursales/:entidadId',
      name : 'sucursales',
      component: sucursales
    },

    {
      path: '/addsucursal/:entidadId',
      name : 'addsucursal',
      component: addSucursal
    },
    {
      path : '/rubros',
      name : 'rubros',
      component : Rubros
    },
    {
      path : '/addrubro',
      name : 'addrubro',
      component : AddRubro
    },
    {
      path : '/subrubros',
      name : 'subrubros',
      component : SubRubros
    }



  ]
})
