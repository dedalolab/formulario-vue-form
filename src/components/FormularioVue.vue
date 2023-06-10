<template>

  <section class="form">
 
      <h2><u>Formulario con 
        <a href="https://www.npmjs.com/package/vue-form" target="_blank">
          VueForm
        </a></u>
      </h2>

      <br>

      <VueForm ref="form" :state="formState" @submit.prevent="submitForm">

        <Validate tag="div">

          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            class="form-control w-400"
            autocomplete="off"
            v-model="formData.nombre"
            required
            :minlength="textLengthMin"
            :maxlength="textLengthMax"
          >
       
          <FieldMessages name="nombre">
            <div 
              v-if="formState.$submitted"
              slot="required" 
              class="alert alert-danger mt-1 w-400"
            >
              Campo requerido
            </div>            
                
            <div
              v-if="formState.$submitted && formState.$dirty" 
              slot="minlength" 
              class="alert alert-danger mt-1 w-400"
            >
              Este campo requiere como mínimo {{ textLengthMin }} caracteres
            </div>

            <div 
              v-if="formData.nombre.length == textLengthMax" 
              class="alert alert-warning mt-1 w-400"
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
            class="form-control w-400"
            autocomplete="off"
            v-model="formData.apellido"
            required
            :minlength="textLengthMin"
            :maxlength="textLengthMax"
          >

          <FieldMessages name="apellido">

            <div
              v-if="formState.$submitted" 
              slot="required" 
              class="alert alert-danger mt-1 w-400"
            >
              Campo requerido
            </div>            
               
            <div
              v-if="formState.$submitted && formState.$dirty" 
              slot="minlength" 
              class="alert alert-danger mt-1 w-400"
            >
              Este campo requiere como mínimo {{ textLengthMin }} caracteres
            </div>  

            <div 
              v-if="formData.apellido.length == textLengthMax" 
              class="alert alert-warning mt-1 w-400"
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
            class="form-control w-400"
            autocomplete="off"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
          >

          <FieldMessages name="edad">

            <div
              v-if="formState.$submitted"  
              slot="required" 
              class="alert alert-danger mt-1 w-400"
            >
              Campo requerido
            </div>          
            <div
              v-if="formState.$submitted && formState.$dirty"  
              slot="min" 
              class="alert alert-danger mt-1 w-400"
            >
              La edad mínima es de {{ edadMin }} años
            </div>            
            <div 
              v-if="formState.$submitted && formState.$dirty" 
              slot="max" 
              class="alert alert-danger mt-1 w-400"
            >
              La edad máxima permitida es de {{ edadMax }} años
            </div>            
          
          </FieldMessages>

        </Validate>
        <br>

        <Validate tag="label">

          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-control w-400"
            autocomplete="off"
            v-model.trim="formData.email"
            required
          >

          <FieldMessages name="email" auto-label>
            <div 
              v-if="formState.$submitted" 
              slot="required" 
              class="alert alert-danger mt-1 w-400"
            >
              Campo requerido
            </div>            
            <div
              v-if="formState.$submitted && formState.$dirty"  
              slot="email" 
              class="alert alert-danger mt-1 w-400"
            >
              Formato de e-mail inválido.
            </div>

          </FieldMessages>

        </Validate>
        <br>

        <button class="btn btn-success mt-5 mb-1" type="submit">Enviar</button>
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
      
      // formState.$submitted == formulario enviado
      // formState.$touched == campo focalizado
      // formState.$dirty == campo ingresado
      // formState.$error == campo con error
      // formState.$invalid == formulario con errores
      formState : {},
      
      textLengthMin : 3,
      textLengthMax : 15,
      
      edadMin : 18,
      edadMax : 120
    }),

    methods: {
 
      submitForm() {

        if (this.formState.$invalid) {
          // scroll hacia arriba para que el usuario vea los mensajes de error
          window.scroll(0,0)

        } else {
          // Emitir data
          // Usar un spread operator para clonar el objeto formData
          // De lo contrario se vacía al hacer el reset
          this.$emit('emit-form', { ...this.formData })
          
          // Resetear validaciones
          this.formState._reset()

          // Resetear formulario
          // El metodo nativo de VueForm no funciona
          // this.$refs.form.reset()
          this.reset()
        }
      },

      reset() {
        Object.keys(this.formData).forEach(key => this.formData[key] = '')
      }
    },
  }

</script>

<style>

.w-400 {
  min-width: 400px;
  max-width: 400px;
  margin: auto;
}

</style>