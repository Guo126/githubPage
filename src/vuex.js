
let Vue;

class Store {
    constructor(options){
        this.vm = new Vue({
            data: {
                state:options.state
            }
        })
        //getters
        let getters = options.getters;
        this.getters = {};
        Object.keys(getters).forEach(getterName=>{
            Object.defineProperty(this.getters,getterName,{
                get: ()=>{
                    return getters[getterName](this.state)
                }
            })
        })
        //actions
        let actions = options.actions;
        this.actions = {};
        Object.keys(actions).forEach(actionName=>{
         
                this.actions[actionName] = (payload)=>{
                    actions[actionName](this,payload)
                }
                
           
        })

         //mutations
         let mutations = options.mutations;
         this.mutations = {};
         Object.keys(mutations).forEach(mutationName=>{
          
                 this.mutations[mutationName] = (payload)=>{
                    mutations[mutationName](this.state,payload)
                 }
                 
            
         })

    }
    get state(){
        return this.vm.state
    }

    dispatch(name,payload) {
        this.actions[name](payload)

    }

    commit=(name,payload)=>{
        
        this.mutations[name](payload)
    }
}

//在所有组件中添加$store对象   可以使用this.$store.commit
const install = (v)=>{
    Vue = v;
    Vue.mixin({
        beforeCreate(){
            //console.log(this.$options.name)  //循环组件
            if(this.$options && this.$options.store){    //root
                this.$store = this.$options.store;
            }else{              //child
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    })
}

export default {Store,install}