import Vue from 'vue'
import Vuex from 'vuex'

/* import state from './myNum/state';
import getters from './myNum/getters';
import mutations from './myNum/mutations';
import actions from './myNum/action'; */
import myNum from './myNum'
import myCar from './myCar'

Vue.use(Vuex)

export default new Vuex.Store({
  /* state,
  getters,
  mutations,
  actions, */
  modules:{
    myNum,myCar

  }
})
