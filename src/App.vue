<template>
  <main>

    <FormularioVue @emit-form="addUser"/>

    <TableComponent class="table" :users="users"/>

  </main>
</template>

<script>

import TableComponent from '@/components/TableComponent.vue'
import FormularioVue from '@/components/FormularioVue.vue'


export default {

  name: 'App',

  components: {
    TableComponent, FormularioVue
  },

  data: () => ({
    users: [],  
  }),

  
  methods: {

    addUser(form) {    
      this.users.push(form)
    }
  }
}
</script>

<style scoped>

.table {
  margin: 4rem auto;
  max-width: 700px;
}

main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
