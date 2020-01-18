export const state = () => ({
    value: false,
});
  
export const mutations = {
    toggle(state,) {
        state.value = !state.value;
        localStorage.setItem('darkmode', state.value);
        let body = document.getElementsByTagName('body')[0];
        if(state.value) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    },
    set(state, bool) {
        state.value = bool;
        if(bool) {
            let body = document.getElementsByTagName('body')[0];
            body.classList.add("dark-mode");
        }
    }
  }
