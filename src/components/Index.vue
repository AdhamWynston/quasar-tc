<template>
    <q-layout
            ref="layout"
            view="lHh Lpr fff"
            :left-class="{'bg-grey-2': true}"
    >
        <q-toolbar slot="header" color="dark" class="glossy">
            <q-btn
                    flat
                    @click="$refs.layout.toggleLeft()"
            >
                <q-icon name="menu" />
            </q-btn>

            <q-toolbar-title>
                sgENV
                <div slot="subtitle">Sistema Gerenciador de Segurança de Eventos</div>
            </q-toolbar-title>
        </q-toolbar>
        <div slot="left">
            <q-side-link item to="/clients" exact>
                <q-item-side icon="school" />
                <q-item-main label="Clientes" />
            </q-side-link>
            <q-side-link item to="/test-layout/toolbar">
                <q-item-main label="Toolbar" />
            </q-side-link>
        </div>
            <router-view />

    </q-layout>
</template>

<script>
    /* eslint-disable indent */

    import {
        QSideLink,
        QLayout,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QListHeader,
        QItem,
        QItemSide,
        QItemMain
    } from 'quasar'
    import McForm from './expenses/Form.vue'
    import McList from './expenses/List.vue'
    export default {
        name: 'index',
        components: {
            McList,
            McForm,
            QSideLink,
            QLayout,
            QToolbar,
            QToolbarTitle,
            QBtn,
            QIcon,
            QList,
            QListHeader,
            QItem,
            QItemSide,
            QItemMain
        },
        computed: {
            list () {
                return this.$store.state.Expenses.list
            }
        }
    }
</script>

<style scoped="">
    .container {
        padding: 20px;
    }
</style>
