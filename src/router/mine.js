export default {
    // name:'mine',
    path:'/mine',
    component:()=>import('@/views/Mine/mine'),
    children:[
        {path:"", redirect:"list"},
        {path:"list", component:() =>import('@/views/Mine/list'), name:"list"},
        {path:"car", component:() =>import('@/views/Mine/car'), name:"car"}
    ]
}