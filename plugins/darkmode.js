export default function ({ store, redirect }) {
    let stored = localStorage.getItem("darkmode");
    console.log("this happens", stored);
    if(stored) {
        store.commit('darkmode/set', (stored === 'true'));
    }
}