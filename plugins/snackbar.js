export default ({ app, store }, inject) => {
    inject('snack', {
        custom({ text = '', button = '', color = "#4CAF50" }) {
            store.commit('snackbar/showSnack', { text, button, color });
        },
        success({ text = '', button = '' }) {
            const color = "#4CAF50";
            store.commit('snackbar/showSnack', { text, button, color });
        },
        danger({ text = '', button = '' }) {
            const color = "#D32F2F";
            store.commit('snackbar/showSnack', { text, button, color });
        },
    })
  }