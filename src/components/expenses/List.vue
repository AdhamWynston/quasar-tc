<template>
    <div>
        <div class="expense" v-for="expense in list">
            <p link>{{ expense.date}} - R${{expense.amount}}</p>
            <p link>{{expense.description}}</p>
        </div>
    </div>
</template>

<script>
    /* eslint-disable indent */

    import { QDatetime, QItemSeparator, QListHeader, QItem, QList, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput } from 'quasar'

    export default {
        components: { QDatetime, QListHeader, QItemSeparator, QItem, QList, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput },
        computed: {
            list () {
                return this.$store.state.Expenses.list
            }
        }
    }
</script>

<style>
    .expense {
        border-bottom: #999 1px solid;
        padding-top: 10px;
    }

</style>