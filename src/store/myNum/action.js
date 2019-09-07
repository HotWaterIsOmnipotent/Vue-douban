import {RANDOM_NUM1} from './const'
export default {
    getBackendData({commit}){
        setTimeout(() =>{
            let r = Math.ceil(Math.random() * 100);
            commit(RANDOM_NUM1, r)
        }, 2000)
    }
}