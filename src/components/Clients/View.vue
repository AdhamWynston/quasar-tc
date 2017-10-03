<template>
  <div class="layout-padding">
    <div class="row">
      <h5>Detalhes do cliente </h5>
      <q-fab
              color="dark"
              icon="keyboard_arrow_right"
              active-icon="close"
              direction="right"
      >
        <q-tooltip
                slot="tooltip"
                anchor="center left"
                self="center right"
                :offset="[20, 0]"
        >
        </q-tooltip>
        <q-fab-action  @click="goClients()" icon="arrow_back">
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Voltar</q-tooltip>
        </q-fab-action>
      </q-fab>
    </div>
  </div>
</template>

<script>
import {
  QLayout,
  QFab,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QFabAction,
  QTooltip,
  QScrollArea} from 'quasar'
export default {
  components: {
    QTooltip,
    QFabAction,
    QFab,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea
  },
  data () {
    return {}
  },
  methods: {
    goClients () {
      this.$router.push('/clients')
    }
  }
}
</script>

<style>
</style>
