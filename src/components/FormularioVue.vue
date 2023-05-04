<template>

  <section class="form">
 
      <h2><u>Formulario</u></h2>

      <br>

      <VueForm :state="formState" @submit.prevent="submitForm">

        <Validate tag="div">

          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model="formData.nombre"
            required
            :minlength="textLengthMin"
            :maxlength="textLengthMax"
          >
       
          <FieldMessages name="nombre" show="$submitted">
            <div 
              slot="required" 
              class="alert alert-danger mt-1"
            >
              Campo requerido
            </div>            
                
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ textLengthMin }} caracteres
            </div>

            <div v-if="formData.nombre.length == textLengthMax" 
              class="alert alert-warning mt-1"
            >
              Este campo debe tener como máximo {{ textLengthMax }} caracteres
            </div>

          </FieldMessages>

        </Validate>
        <br>

        <Validate tag="div">

          <label for="apellido">Apellido</label>
          <input 
            type="text" 
            id="apellido" 
            name="apellido" 
            class="form-control"
            autocomplete="off"
            v-model="formData.apellido"
            required
            :maxlength="textLengthMax"
          >

          <FieldMessages name="apellido" show="$submitted">

            <div 
              slot="required" 
              class="alert alert-danger mt-1"
            >Campo requerido</div>            
               
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ textLengthMin }} caracteres
            </div>  

            <div v-if="formData.apellido.length == textLengthMax" 
              class="alert alert-warning mt-1"
            >
              Este campo debe tener como máximo {{ textLengthMax }} caracteres
            </div>

          </FieldMessages>

        </Validate>
        <br>

        <Validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
          >

          <FieldMessages name="edad" show="$submitted">

            <div 
              slot="required" 
              class="alert alert-danger mt-1"
            >Campo requerido</div>            
            <div 
              slot="min" 
              class="alert alert-danger mt-1"
            >La edad mínima es de {{edadMin}} años</div>            
            <div 
              slot="max" 
              class="alert alert-danger mt-1"
            >La edad máxima permitida es de {{edadMax}} años</div>            
          
          </FieldMessages>

        </Validate>
        <br>

        <Validate tag="label">

          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email"
            required
          >

          <FieldMessages name="email" auto-label show="$submitted">
            <div 
              slot="required" 
              class="alert alert-danger mt-1"
            >Campo requerido</div>            
            <div 
              slot="email" 
              class="alert alert-danger mt-1"
            >Formato de e-mail invalido.</div>
          </FieldMessages>

        </Validate>
        <br>

        <button class="btn btn-success mt-3 mb-5" type="submit">Enviar</button>
      </VueForm>

  </section>

</template>

<script>

  export default  {

    emits: ['emit-form'],

    data: () => ({
 
      personas: [],

      formData : {
        nombre: '',
        apellido: '',
        edad: '',
        email: ''
      },

      formState : {},
      
      textLengthMin : 3,
      textLengthMax : 15,
      
      edadMin : 18,
      edadMax : 120
    }),

    methods: {
 
      submitForm() {
        if (this.formState.$invalid) {
          window.scroll(0,0)
        } else {
          this.$emit('emit-form', { ...this.formData })
          this.reset()
          this.formState.$submitted = false
          this.formState.$dirty = false
          this.formState.$touched = false
          console.log(this.formState.$submitted)
        }
      },

      reset() {
        Object.keys(this.formData).forEach(key => this.formData[key] = '')
      }
    },
  }

</script>

<style scoped>

.form {
  margin: auto;
  max-width: 600px;
}

.form-control {
  margin: auto;
  max-width: 400px;
}

.alert {
  margin: auto;
  max-width: 400px;
}



</style>