<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 :style="colorContador">
      {{titulo}} {{contador}}
    </h1>
    <button @click="incrementar">Aumentar 100</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'; //El mapeo de estos objetos los podemos usar con la libreria de vuex

export default {
  name: 'Home',
  components: {
  }, 
  data(){ 
    return{ 
      titulo: 'Saldo:'
    }
  }, 
  computed:{  

    ...mapState(['contador']),  //Como estamos llamando un objeto dentro de otro objeto, usamos la funcion de propagacion de JS

    colorContador(){ 
    return [this.contador >  100 ? {'color': 'green'} : {'color': 'red'}]
  }
  }, 
  methods:{ 
    ...mapMutations(['incrementar']) //De esta forma accedemos a nuestro metodo de incrementar
  }
  
}
</script>
