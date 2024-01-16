<template>
  <div class="body">
    <div class="fondo1">
		
    
    <div class="contenedor-form login">
    
      <h3>Registro</h3>
    <form action="#"
     @submit.prevent="onSubmit">
        <div class="contenedor-input">
        <span class="icono"> <i class="bi bi-person"></i></span>
        <input  v-model="userForm.name" type="text" required>
        <label for="#">Nombres</label>
      </div>

      <!-- <div class="contenedor-input">
        <span class="icono"> <i class="bi bi-person"></i></span>
        <input  v-model="userForm.apellidos"  type="text" required>
        <label for="#">Apellidos</label>
      </div> -->


      <div class="contenedor-input">
        <span class="icono"> <i class="bi bi-envelope"></i></span>
        <input  v-model="userForm.email"  type="email" required>
        <label for="#">Email</label>
      </div>

      <div class="contenedor-input">
        <span class="icono"> <i class="bi bi-key"></i></span>
        <input  v-model="userForm.password"  type="password" required>
        <label for="#">Contraseña</label>
      </div>

      

      <button type="submit" class="botn">Crear Cuenta</button>

      <div class="registrar">
        <p>Ya tienes una Cuenta? <router-link :to="{name:'Login'}"  class="registrar-link">Inicio de sesion</router-link></p>
      </div>

    </form>
  </div>

  </div>
  
  </div>
</template>


<script>


import {ref} from 'vue'
import useAuth from '../composables/useAuth'
import {useRouter} from 'vue-router'

import Swal from 'sweetalert2'


export default {
  setup(){


    const router = useRouter()
    const { createUser} = useAuth()
    
    const userForm = ref ({
      name:'',
     
      email :'',
      password:''
    })

    return {
      userForm,


      onSubmit:  async () =>{
       
       const {ok,message}= await createUser(userForm.value)
       if (ok) {
        Swal.fire('Éxito', 'El registro fue exitoso', 'success')
        router.push({ name: 'home' })
      } else {
        Swal.fire('Error', message, 'error')
      }


       if(!ok) Swal.fire('Error',message,'error')
        else router.push({name: 'home'})

      }
    }
  }
}
</script>

<style>

</style>