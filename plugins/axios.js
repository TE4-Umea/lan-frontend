export default function ({ $axios, redirect }) {
    $axios.onRequest((config) => {
        // console.log(config); // Använd detta för att kolla på alla requests som skickas i systemet
        if (process.browser) {
            let provider = localStorage.getItem('provider');
            const refreshToken = localStorage.getItem('refreshToken');
            if(provider) {
                config.headers.common['Provider'] = provider;
                config.headers.common['RefreshToken'] = refreshToken;
            } else {
                config.headers.common['Provider'] = null;
                config.headers.common['RefreshToken'] = null;
            }
          }
    });
  }