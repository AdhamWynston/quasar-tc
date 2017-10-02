<template>
    <form @submit.prevent="submit">
        <div class="row">
            <div class=" col-xs-12 col-sm-6 col-md-4">
                <q-input ref="amount" v-model="expense.amount" type="number" prefix="R$" stack-label="Valor"/>
            </div>
            <div class="col-12">
                <q-input v-model="expense.description" type="text" stack-label="Descrição"/>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <q-datetime
                        id="date"
                        v-model="expense.date"
                        stack-label="Data"
                        type="date"
                        format="DD/MM/YYYY"
                        ok-label="OK"
                        clear-label="Limpar"
                        cancel-label="Cancelar"
                        :day-names="['Dom','Seg', 'Ter','Qua','Qui','Sex','Sáb']"
                        :month-names="['Janeiro', 'Fevereiro','Março','Abril','Maio','Junho',
                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <q-btn class="full-width" color="primary">Salvar</q-btn>
            </div>
        </div>
    </form>
</template>

<script>
    /* eslint-disable indent */

    import {uid, Toast, QDatetime, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput} from 'quasar'
    let timeStamp = Date.now()
    import moment from 'moment'
    export default {
        components: {QDatetime, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput},
        data () {
            return {
                expense: {
                    id: '',
                    amount: '',
                    description: '',
                    date: timeStamp
                }
            }
        },
        methods: {
            submit () {
                const cloned = JSON.parse(JSON.stringify(this.expense))
                cloned.date = moment().format('DD/MM/YYYY')
                cloned.id = uid()
                this.$store.commit('ADD_EXPENSE', cloned)
                Toast.create.positive('Registrado com sucesso!')
                this.reset()
            },
            reset () {
                this.expense.amount = ''
                this.expense.description = ''
                this.expense.date = timeStamp
                this.$refs.amount.focus()
            }
        }
    }
</script>

<style>
</style>