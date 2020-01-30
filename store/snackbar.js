// ~/store/snackbar.js

export const state = () => ({
    text: '',
    button: '',
    color: ''
  })
  
export const mutations = {
    showSnack (state, payload) {
        state.text = payload.text;
        state.button = payload.button;
        state.color = payload.color;
    }
}