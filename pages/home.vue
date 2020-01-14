<template>
    <center-wrapper >
        <div>
            <image-layout
                icon="nti_small_black.svg"
                alt="Bild på NTIs logga, Välkommen!"
                title="Välkommen!"
                paragraph="Logga in nedan för att komma vidare i appen."
            />
              <div class="justify-content-center d-flex">

                <div class="google-button" >
                  <span class="google-inner">

                    <img src="~/assets/images/google_button.svg" class="image"> </img>
                    <p>Logga in med google</p>
                  </span>
                </div>
              </div>

        </div>
    </center-wrapper>

</template>
<script>
    import CenterWrapper from '~/components/CenterWrapper.vue';
    import ImageLayout from '~/components/layouts/ImageLayout'
    export default {
    components: {
        CenterWrapper,
        ImageLayout
        }
    }
</script>

<style lang="scss" scoped>

.google-button {
    max-width: 343px;

    background: #FFFFFF;
    /* Shadow-button */
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.google-button:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
}
.google-inner {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 5px 10px;
    p {
      margin: 0;
      padding-top: 10px;
      font-size: 24px;
      text-transform: uppercase;
    }
}

.image {
  margin: 10px;
}


</style>

