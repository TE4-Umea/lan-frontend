<template>
    <b-container>
        <b-row align-h="center"> 
            <b-col cols="3" align-self="center">
                <logo />
            </b-col>
        </b-row>
        <b-row align-h="center"> 
            <b-col cols="3">

                <p>Logga in för att få tillgång till appens funktioner</p>
            </b-col>
        </b-row>
        
    </b-container>

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
 p {
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;

    color: rgba(0, 0, 0, 0.6);
 }
</style>
