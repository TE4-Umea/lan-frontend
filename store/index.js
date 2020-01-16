export const state = () => ({
    event: undefined,
    registration: undefined,
});
  
export const actions = {
    async GET_EVENT ({ commit, state }) {
        const { data } = await this.$axios.get('/event/latest');
        state.event = data;
        if(data !== undefined) {
            state.dispatch('GET_REGISTRATION')
        }
    },
    async GET_REGISTRATION ({ commit, state }) {
        const { data } = await this.$axios.get('/event/' + state.event.id + '/registration');
        state.registration = data;
    }
  }