export const state = () => ({
    rooms: [],
});
export const mutations = {
    SET_ROOMS(state, data) {
        state.rooms = data;
    },
    SET_REGISTRATION(state, data) {
        state.registration = data;
    },

    SET_NOTIFICATIONS(state, data) {
        state.notifications = data;
    },

    ADD_NOTIFICATION(state, data) {
        state.notifications.push(data);
    },
}
export const actions = {
    async GET_ROOMS ({ commit, state, dispatch }) {
        try {
            const { data } = await this.$axios.get('/admin/placement/rooms/read')
            commit('SET_ROOMS', data);
        } catch(e) {
            console.log('There are currently no events found');
        }
    },
  }
