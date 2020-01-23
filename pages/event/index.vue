<template>
    <center-wrapper>
        <wrapper>
            <div>
                <generalInfo/>
            </div>
            <div>
                <personalInfo/>
            </div>
            <div>
                <h4> Notiser </h4>
                <notifications/>
            </div>
        </wrapper>
    </center-wrapper>
</template>

<script>

import personalInfo from '~/components/textfields/personalInfo'
import generalInfo from '~/components/textfields/generalInfo'
import Notifications from '~/components/notifications/Notifications'
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

        personalInfo,
        generalInfo,
        Notifications,
        Wrapper,
        CenterWrapper,

    },
}
</script>

<style>

</style>
