export default {
    getTotal(state){
        let cars = state.cars
        let total = {p:0,num:0}
        cars.forEach(item => {
            total.p += item.num * item.price_low;
            total.num += item.num
        });
        total.p = total.p.toFixed(2);
        return total
    }
}