<template>
  <div>
    <h5> Editar Cliente </h5>
    <div>
      <div class="row sm-gutter">
        <div class="col-12">
          <q-input inverted v-model="client.name" class="no-margin" float-label="col-12" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input inverted v-model="client.document" class="no-margin" float-label="col-xs-12 col-sm-6 TOP LEFT" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input inverted v-model="client.phone" class="no-margin" float-label="col-xs-12 col-sm-6 TOP RIGHT" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input inverted v-model="client.phoneAlternative" class="no-margin" float-label="col-xs-12 col-sm-6 BOTTOM LEFT" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input inverted v-model="client.email" class="no-margin" float-label="col-xs-12 col-sm-6 BOTTOM RIGHT" />
        </div>
        <div class="col-12">
          <q-input inverted v-model="client.city" class="no-margin" float-label="col-12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QInput
  } from 'quasar'
  export default {
    computed: {
      client () {
        return this.$store.state.clients.one || {}
      }
    },
    data () {
      return {}
    },
    components: {
      QInput
    }
  }
</script>

<style>
</style>
