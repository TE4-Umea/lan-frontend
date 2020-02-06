<template>
    <div class="container pt-4">
        <div class="row">
            <div class="col-md-6 pt-3 pt-md-0">
                <div>
                    <generalInfo/>
                    <personalInfo/>
                    <h4> Notiser </h4>
                    <notifications/>
                </div>
            </div>

            <div class="col-md-6 pt-3 pt-md-0">
                <stream/>
            </div>
        </div>
  	</div>
</template>

<script>

import personalInfo from '~/components/textfields/personalInfo'
import generalInfo from '~/components/textfields/generalInfo'
import Notifications from '~/components/notifications/Notifications'
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
import Wrapper from '~/components/layouts/positioning/Wrapper';
import Stream from '~/components/event/Stream';

export default {
    head () {
        return {
        titleTemplate: 'Hem %s',
        }
    },
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
        Stream
    },
}
</script>

<style>

</style>
