export const state = () => ({
    rooms: [],
});

export const getters = {
    getRoomsStr(state) {
        return state.rooms.filter(room => room.name);
    },
    getRoom(state, id) {
        return state.rooms.find(index => index.id == id);
    }
}
export const mutations = {
    DELETE_ROOM(state, id) {
        const index = state.rooms.findIndex(index => index.id == id);
        state.rooms.splice(index, 1);
    },
    SET_ROOMS(state, data) {
        state.rooms = data;
    },
    ADD_ROOM(state, data) {
        state.rooms.push(data);
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
