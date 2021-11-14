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

    },
    mutations:{

    },
    actions:{

    }
})