import {ADD_GOODS} from './const'
export default {
    initGoods({commit}){
        let cars = getData();
        commit(ADD_GOODS, cars)
    },
    addGoods({commit}, good){
        let cars = getData();
        let isHas = cars.some(item => {
            if(item.id === good.id){
                item.num++;
                return true;
            }
        });
        if(!isHas){
            good.num = 1;
            cars.push(good)
        }

        localStorage.cars = JSON.stringify(cars);
        commit(ADD_GOODS, cars)
    },
    reduceGoods({commit}, good){
        let cars = getData();
        cars = cars.filter(item => {
            if(item.id === good.id){
                item.num--
                if(item.num <= 0) return false;
            }
            return true;
        })
        localStorage.cars = JSON.stringify(cars);
        commit(ADD_GOODS, cars)
    }
}

function getData(){
    return localStorage.cars ? JSON.parse(localStorage.cars) : []
}