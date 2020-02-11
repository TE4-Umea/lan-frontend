<template>
<center-wrapper >
        <image-layout
            icon="logo"
            alt="Bild på NTIs logga, Välkommen!"
            title="Välkommen!"
            paragraph="Logga in nedan för att komma vidare i appen."
        >
            <div class="justify-content-center d-flex">
                <div>
                    <div class="google-button d-contrast" tabindex="1">
                        <a :href="$axios.defaults.baseURL + '/auth/google/redirect'" class="text-decoration-none">
                            <span class="google-inner">
                            <img src="~/assets/images/google_button.svg" class="image"/>
                            <p>Logga in med google</p>
                            </span>
                        </a>
                    </div>
                    <div class="pt-2">
                    <small>eller
                        <nuxt-link to="/auth/login" class="underline" tabindex=2>logga in som gäst</nuxt-link>
                    </small>
                    </div>
                </div>
            </div>
        </image-layout>
    </center-wrapper>

</template>
<script>
    import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
    import ImageLayout from '~/components/layouts/ImageLayout'

    export default {
        head () {
            return {
            titleTemplate: 'Hem %s',
            }
        },
        middleware: 'guest',
        components: {
            CenterWrapper,
            ImageLayout,
        }
    }
</script>

<style lang="scss" scoped>

.google-button {
    max-width: 343px;
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

