<template>
  <div>
    <h5> Editar Cliente </h5>
    <div>
      <div class="row sm-gutter">
        <div class="col-12">
          <q-input
                  v-model="client.name"
                  class="no-margin"
                  float-label="Nome"
          />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input
                  v-model="client.document"
                  class="no-margin"
                  float-label="Nº Documento"
          />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input
                  v-model="client.email"
                  @blur="$v.form.email.$touch"
                  @keyup.enter="submit"
                  :error="$v.form.email.$error"
                  class="no-margin"
                  float-label="E-mail" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input
                  v-model="client.phone"
                  class="no-margin"
                  float-label="Telefone" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input
                  v-model="client.phoneAlternative"
                  class="no-margin" float-label="Telefone Alernativo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import {
    QInput,
    Toast
  } from 'quasar'
  export default {
    computed: {
      client () {
        return this.$store.state.clients.one || {}
      }
    },
    data () {
      return {
        form: {
          email: ''
        }
      }
    },
    validations: {
      form: {
        email: { required, email }
      }
    },
    components: {
      QInput,
      Toast
    }
  }
</script>

<style>
</style>
