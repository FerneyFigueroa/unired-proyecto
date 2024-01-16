<template>
  <div class="body">
    <div class="fondo">
		
    <!-- <img src="../../../img/Virtual 2 logo fondo.jpg" alt="Logo" class="logo-fondo" /> -->
    
    <div class="contenedor-form login">
      <h3>Iniciar Sesion</h3>
    <form action="#"
    @submit.prevent="onSubmit">
      <div class="contenedor-input">
        <span class="icono"> <i class="bi bi-envelope"></i></span>
        <input v-model="userForm.email" type="email" required>
        <label for="#">Email</label>
      </div>

      <div class="contenedor-input">
        <span class="icono"> <i class="bi bi-person-fill-lock"></i></span>
        <input v-model="userForm.password"  type="password" required>
        <label for="#">Contraseña</label>
      </div>

      <div class="recordar">
        <label for="#"><input type="checkbox">Recordar Sesion</label>
        <a href="#">Olvide la contraseña </a>
      </div>

      <button type="submit" class="botn">Iniciar sesion</button>

      <div class="registrar">
        <p>No tienes Cuenta?</p> <router-link :to="{name:'register'}"             class="registrar-link">Registrarse</router-link>
      </div>

    </form>
      
  </div>
  
  </div>
  
  </div>
</template>

<script>

import { ref } from 'vue';
import {useRouter} from 'vue-router'
import userAuth from '../composables/useAuth.js'
import Swal from 'sweetalert2';


export default {
  setup() {
    const router = useRouter()
    const { loginUser } = userAuth()
    
    const userForm = ref({
      email: 'alezfigueroa@hotmail.com',
      password: '123456'
    })

    return {
      userForm,
      onSubmit: async () => {
        const { ok, message } = await loginUser(userForm.value)

        if (!ok) {
          Swal.fire('Error', message, 'error')
        } else {
          // SweetAlert para un inicio de sesión exitoso
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            showConfirmButton: false,
            timer: 2500
          })
          

          // Redireccionar a la página de inicio después de un inicio de sesión exitoso
          router.push({ name: 'home' })
        }
      }
    }
  }
}
</script>

