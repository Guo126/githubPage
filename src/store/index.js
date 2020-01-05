import Vue from 'vue'
import Vuex from '../vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //数据
    state: {
        num:1,
        text:""
    },
    getters: {
        getNum: function(state){
            
            return state.num
            // if(state.num != 1){
            //     return state.num
            // }
            // return dispatch("addOneAsync",2)
            
        }
    },
    mutations: {   //突变   同步
        
        addOne(state,payload) {
           
            state.num += payload;
        },

        change(state,text) {
            state.text = text;
        }
    },
    actions: {   //异步调用
        addOneAsync({commit,dispatch},payload){
            setTimeout(()=>{
                console.log("suhahda")
              
                commit("addOne",payload)
            },1000)
        }
    },
    modules: {

    }
})