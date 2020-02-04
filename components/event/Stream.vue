<template>
<div class="">
    <h4> lanets stream </h4>
    <div class="iframe-container">

        <iframe
            src="https://player.twitch.tv/?channel=ntiumea&autoplay=false&muted=true"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            >
        </iframe>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}
 
.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
</style>