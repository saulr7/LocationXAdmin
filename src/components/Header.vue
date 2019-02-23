<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" href="#">LocationX - Admin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" >
        <router-link class="nav-link"  to="/entidades">
            Entidades
        </router-link>
      </li>
      <li class="nav-item" >
        <router-link class="nav-link"  to="/rubros">
            Rubros
        </router-link>
      </li>      
      <li class="nav-item " >
        <router-link class="nav-link"  to="/subrubros">
          Sub-Rubros
        </router-link>
      </li>
      <li class="nav-item " >
        <router-link class="nav-link"  to="/Ciudades">
          Ciudades
        </router-link>
      </li>
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>

</template>


<script>
export default {
    
    name: 'HeaderComponent',
    data()
    {
      return {
     
      }

    },
    methods:
    {

    }
}
</script>

<style>



</style>

