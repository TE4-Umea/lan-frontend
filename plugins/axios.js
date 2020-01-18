export default function ({ $axios, redirect }) {
    // Temporary solution
    $axios.onRequest((config) => {
        console.log(config);
        if (process.browser) {
            let provider = localStorage.getItem('provider');
            if(provider) {
                config.headers.common['provider'] = provider;
            }
          }
    });
  }