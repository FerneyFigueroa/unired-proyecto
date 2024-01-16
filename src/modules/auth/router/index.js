export default {
    name:'auth',
    component : ()=> import(/**/'../../../modules/auth/layouts/AuthLayout.vue'),
    children:[
       {
        path:'',
        name:'Login',
        component : ()=> import(/**/'../../../modules/auth/views/LoginAdmin.vue'),
       } ,
       {
        path:'/register',
        name:'register',
        component : ()=> import(/**/'../../../modules/auth/views/RegistroAdmin.vue'),
       } 
    ]
}