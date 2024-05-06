<template>
  <h1 class="nombre-sitio">Sistema de Retenciones IVA ISLR</h1>
  <div class="contenedor-navegacion">
    <nav class="navegacion">                    
           <router-link to="/">Inicio</router-link>
           <router-link to="howitwork">¿Cómo funciona?</router-link>
           <router-link to="whatis">¿Qué es?</router-link>
           <router-link to="price">Precio</router-link>
             <!-- <a class="navegacion__link" href="#quees">¿Que és?</a>
             <a class="navegacion__link" href="#comofunciona">¿Cómo funciona?</a>
             <a class="navegacion__link" href="#precio">Precio</a>                     -->
    </nav>    
  </div>
  <router-view/>
</template>

<script setup>
  
</script>


<style>
  
</style>