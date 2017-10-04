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
                  type="email"
                  class="no-margin"
                  float-label="E-mail"
                  required
          />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input
                  v-model="client.phone"
                  class="no-margin"
                  float-label="Telefone" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input
                  type="text"
                  max-length="14"
                  v-model="cpfComputed"
                  float-label="Telefone Alernativo"
          />
        </div>
        <q-btn @click="seila()"></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  var CPF = require('cpf_cnpj').CPF
//  var CNPJ = require('cpf_cnpj').CNPJ
  import {
    QInput,
    QBtn,
    Toast
  } from 'quasar'
  export default {
    methods: {
      seila () {
        console.log(CPF.isValid('01335065145'))
      }
    },
    computed: {
      client () {
        return this.$store.state.clients.one || {}
      },
      cpfComputed: {
        get: function () {
          if (this.client && this.client.document) {
            return CPF.format(this.client.document)
          }
          else {
            return ''
          }
        },
        set: function (newValue) {
          this.client.document = CPF.strip(newValue)
        }
      }
    },
    data () {
      return {
        form: {
          email: '',
          phone: ''
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
      Toast,
      QBtn
    }
  }
</script>

<style scoped>
  * { box-sizing:border-box; }

  /* basic stylings ------------------------------------------ */
  body 				 { background:url(https://scotch.io/wp-content/uploads/2014/07/61.jpg); }
  .container 		{
    font-family:'Roboto';
    width:600px;
    margin:30px auto 0;
    display:block;
    background:#FFF;
    padding:10px 50px 50px;
  }
  h2 		 {
    text-align:center;
    margin-bottom:50px;
  }
  h2 small {
    font-weight:normal;
    color:#888;
    display:block;
  }
  .footer 	{ text-align:center; }
  .footer a  { color:#53B2C8; }

  /* form starting stylings ------------------------------- */
  .group 			  {
    position:relative;
    margin-bottom:45px;
  }
  input 				{
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:300px;
    border:none;
    border-bottom:1px solid #757575;
  }
  input:focus 		{ outline:none; }

  /* LABEL ======================================= */
  label 				 {
    color:#999;
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
  }

  /* active state */
  input:focus ~ label, input:valid ~ label 		{
    top:-20px;
    font-size:14px;
    color:#5264AE;
  }

  /* BOTTOM BARS ================================= */
  .bar 	{ position:relative; display:block; width:300px; }
  .bar:before, .bar:after 	{
    content:'';
    height:2px;
    width:0;
    bottom:1px;
    position:absolute;
    background:#5264AE;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
  }
  .bar:before {
    left:50%;
  }
  .bar:after {
    right:50%;
  }

  /* active state */
  input:focus ~ .bar:before, input:focus ~ .bar:after {
    width:50%;
  }

  /* HIGHLIGHTER ================================== */
  .highlight {
    position:absolute;
    height:60%;
    width:100px;
    top:25%;
    left:0;
    pointer-events:none;
    opacity:0.5;
  }

  /* active state */
  input:focus ~ .highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
  }

  /* ANIMATIONS ================ */
  @-webkit-keyframes inputHighlighter {
    from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
  @-moz-keyframes inputHighlighter {
    from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
  @keyframes inputHighlighter {
    from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
</style>
