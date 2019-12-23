export default function ({ $axios, redirect }) {
    $axios.onRequest((config) => {
        if (process.browser) {
            let provider = localStorage.getItem('provider');
            if(provider) {
                config.headers.common['provider'] = provider;
            }
          }
    });
  }