export const state = () => ({
    details: undefined,
    registration: undefined,
});
export const mutations = {
    SET(state, data) {
        state.details = data;
    },
    SET_REGISTRATION(state, data) {
        state.registration = data;
    },
}
export const actions = {
    async GET ({ commit, state, dispatch }) {
        this.$axios.get('/event/latest').then(res => {
            commit('SET', res.data);
        }).catch(e => {
            console.log('There are currently no events found');
        });
    },
    async GET_REGISTRATION ({ commit, state }) {
        if(state.details) {
            try {
                const { data } = await this.$axios.get('/event/' + state.details.id + '/registration');
                commit('SET_REGISTRATION', data);
            } catch(e){
                console.log("no registration found");
            }
        }
    },
  }