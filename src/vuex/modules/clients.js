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
    }
  }
}
