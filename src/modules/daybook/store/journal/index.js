import state from "./state";

import * as  actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

const jornalModule = {
    namespace: true,
  
    actions,
    getters,
    mutations,
    state

}


export default jornalModule;
