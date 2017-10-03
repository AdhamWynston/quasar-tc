import axios from 'axios'

export default {
  state: {
    list: [],
    one: {}
  },
  mutations: {
    update (state, config) {
      state[config.state] = config.data
    }
  },
  actions: {
    clientsList (context) {
      return axios.get('http://127.0.0.1:8000/api/clients')
        .then((res) => {
          context.commit('update', {
            state: 'list',
            data: res.data
          })
        })
    },
    clientsGet (context, id) {
      return axios.get('http://127.0.0.1:8000/api/clients/' + id)
        .then((res) => {
          context.commit('update', {
            state: 'one',
            data: res.data
          })
        })
    },
    clientInsert (context, data) {
      return axios.post('http://127.0.0.1:8000/api/clients', data)
    },
    clientUpdate (context, config) {
      return axios.put('http://127.0.0.1:8000/api/clients/' + config.id, config.data)
    },
    clientDesactive (context, id) {
      return axios.delete('http://127.0.0.1:8000/api/clients/' + id)
    }
  }
}
