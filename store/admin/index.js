export const state = () => ({
    registrations: [],
});
export const mutations = {
    
    SET_REGISTRATIONS(state, data) {
        state.registrations = data;
    },
    ADD_REGISTRATIONS(state, data) {
        state.rooms.push(data);
    },
}
export const actions = {
    async GET_REGISTRATIONS ({ commit, state, dispatch }) {
        try {
            const { data } = await this.$axios.get('/admin/event/' + this.state.event.details.id + '/registrations/read')
            commit('SET_REGISTRATIONS', data);
        } catch(e) {
            console.log(e, 'err');
        }
    },
  }
