<template>
    <center-wrapper>
        <wrapper>
            <div>
                <h4> Information kring lanet </h4>
            </div>
            <div>
                <h4> Personlig information </h4>
            </div>
            <div>
                <h4> Notiser </h4>
                <notifications/>
            </div>
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
