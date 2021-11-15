import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        title:'Vuex ',
        links:[
            'https://www.google.com',
            'https://www.youtube.com/',
            
        ]
    },
    getters:{
        linkCount:state=>{
            return state.links.length;
        }
    },
    mutations:{
        ADD_LINK:(state,link)=>{
            state.links.push(link)
        },
        REMOVE_LINK:(state,link)=>{
            state.links.splice(link,1)
        },
        REMOVE_ALL:(state)=>{
            state.links=[]
        }
    },
    actions:{
        deleteLink:(context,link)=>{
            context.commit("REMOVE_LINK",link)
        },
        deleteAll({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    commit('REMOVE_ALL')
                    resolve()
                },5000)
            })
        }
    }
})