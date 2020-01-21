<template>
    <center-wrapper>
        <div>
            <h1>Index page for event</h1>
        </div>
    </center-wrapper>
</template>

<script>

import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
import CenterWrapperVue from '../../components/layouts/positioning/CenterWrapper.vue';
export default {
    middleware: [
        'auth',
        'event/none',
        'registration/none',
        'registration/not-checked-in',
    ],
    components:
        CenterWrapper,
}
</script>

<style>

</style>
