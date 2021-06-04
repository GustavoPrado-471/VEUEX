import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 101,
    },
    mutations: { //Podemos modificar los valores globales que tengamo en state, este es su principal objetivo
        incrementar(state) {
            state.contador = state.contador + 100;
        }
    },
    actions: { //En las acciones podemos llamar a las APIS y ejecutar las mutaciones  

    },
    modules: {}
})