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
        }
    },
    actions:{
        deleteLink:(context,link)=>{
            context.commit("REMOVE_LINK",link)
        }
    }
})