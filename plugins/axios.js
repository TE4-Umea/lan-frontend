export default function ({ $axios, redirect }) {
    $axios.onRequest((config) => {
        // console.log(config); // Använd detta för att kolla på alla requests som skickas i systemet
        if (process.browser) {
            let provider = localStorage.getItem('provider');
            if(provider) {
                config.headers.common['provider'] = provider;
            }
          }
    });
  }