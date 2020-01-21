<template>
    <center-wrapper>
        <wrapper>
            <notifications></notifications>
        </wrapper>
    </center-wrapper>
</template>

<script>

import Notifications from '~/components/notifications/notifications'
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
import Wrapper from '~/components/layouts/positioning/Wrapper';
export default {
    middleware: [
        'auth',
        'event/none',
        'registration/none',
        'registration/not-checked-in',
    ],
    components: {

        Notifications,
        Wrapper,
        CenterWrapper,
    }

}
</script>

<style>

</style>
