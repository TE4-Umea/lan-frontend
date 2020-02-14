
<template>
  
<div class="placement">

  <div 
    :class="{'text-light': $store.state.darkmode.value}"
    class="spinner-border spinner" 
    role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <p>
    Tar det lång tid att ladda? testa ladda om hemsidan genom att 
  </p>
  <a href="javascript:history.go(0)">klicka här</a>
</div>
</template>

<style>

.placement {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50vh;
}
.spinner {
  width: 3rem; 
  height: 3rem;
  animation: nuxtLoadingIn 10s ease;
  -webkit-animation: nuxtLoadingIn 10s ease;
  animation-fill-mode: forwards;
}

#nuxt-loading {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: hidden;
}

@keyframes nuxtLoadingIn {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  20% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

@-webkit-keyframes nuxtLoadingIn {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  20% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

#nuxt-loading>div,
#nuxt-loading>div:after {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}

#nuxt-loading>div {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: .5rem solid <%= options.color2 %>;
  border-left: .5rem solid <%= options.color %>;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: nuxtLoading 1.1s infinite linear;
  animation: nuxtLoading 1.1s infinite linear;
}

#nuxt-loading.error>div {
  border-left: .5rem solid #ff4500;
  animation-duration: 5s;
}

@-webkit-keyframes nuxtLoading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes nuxtLoading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

<script>
window.addEventListener('error', function () {
  var e = document.getElementById('nuxt-loading');
  if (e) {
    e.className += ' error';
  }
});
</script>