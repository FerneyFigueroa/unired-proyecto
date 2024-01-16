import {createStore}  from 'vuex'

import auth from '../modules/auth/store'
import jornal from '../modules/daybook/store/journal'



const store = createStore({ 
   modules:{
    auth,
    jornal
   }

});

export default store;