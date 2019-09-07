import {CHANG_NUM1, RANDOM_NUM1} from './const';
export default{
    [CHANG_NUM1](state){
      state.num++
    },
    [RANDOM_NUM1](state, randomNum){
        state.num = randomNum
    }
}