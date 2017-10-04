export default {
  state: {
    count: 0,
    user: {
      name: 'craig'
    }
  },
  // synchronous
  mutations: {
    increment (state) {
      state.count++
    }
  },
  // asynchronous
  // calls the synchronous implementation
  actions: {
    increment (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    }
  },
  getters: {
    name: state => {
      return state.user.name
    }
  }
}
