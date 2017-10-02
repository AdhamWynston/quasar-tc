<template>
  <q-layout
          ref="layout"
          view="lHh Lpr fff"
          :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-toolbar-title>
        sgENV
        <div slot="subtitle">Sistema Gerenciador de Segurança de Eventos</div>
      </q-toolbar-title>
    </q-toolbar>
    <div>
      <q-list highlight inset-separator>
      <div class="expense" v-for="repo in list">
        <q-item>
          <p>{{repo.name}}</p>
        <q-item-separator />
        </q-item>
      </div>
      </q-list>
    </div>
  </q-layout>


</template>

<script>
  import axios from 'axios'
  let user = 'AdhamWynston'
  import {QItemSeparator, QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain} from 'quasar'
export default {
    components: {QItemSeparator, QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QListHeader, QItem, QItemSide, QItemMain
    },
    data () {
      return {
        list: []
      }
    },
    mounted () {
      axios.get('https://api.github.com/users/' + user + '/repos?direction=asc')
        .then((response) => {
          this.list = response.data
          console.log(this.list)
        })
    }
}
</script>

<style>
  .expense {
    border-bottom: #999 1px solid;
    padding-top: 10px;
  }
</style>
