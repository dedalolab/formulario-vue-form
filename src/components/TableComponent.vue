<template>
  <div>
    <table class="table table-dark table-striped table-bordered">
      <thead>
        <tr>
          <th v-for="(title, i) in titles" :key="i">{{ title }}</th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="user in users" :key="user.id">
          <td>{{ user.nombre | capitalize }}</td>
          <td>{{ user.apellido | capitalize }}</td>
          <td>{{ user.edad }}</td>
          <td>{{ lowercase(user.email) }}</td>
        </tr>

      </tbody>

    </table>

  </div>
</template>

<script>

export default {

  props: {
    users: {
      type: Array
    }
  },

  data: () => ({
    titles: ['Nombre', 'Apellido', 'Edad', 'E-mail'],
  }),

  // OJO: En Vue 3 los filters fueron deprecados
  // Pueden ser reemplazados por methods
  filters: {
    capitalize(name) {
      return name.replace(/\b\w/g, l => l.toUpperCase())
    }
  },

  methods: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>

<style scoped>


li {
 
  text-align: left;
  margin-left: -16px;
}

td, th {
  text-align: left;
}
</style>