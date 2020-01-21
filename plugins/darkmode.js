export default function ({ store, redirect }) {
    let stored = localStorage.getItem("darkmode");
    if(stored) {
        store.commit('darkmode/set', (stored === 'true'));
    }
}