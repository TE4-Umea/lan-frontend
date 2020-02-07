<template>
  	<div class="container pt-4">
        <div class="row">
            <div class="col-md-3 pt-3 pt-md-0 ">
                <div>

                    <create-notifications />

                    <div class="notifications d-flex mt-3">
                        <notifications/>
                    </div>
                </div>
            </div>
            
            <div class="col-md-5 pt-3 pt-md-0 order-md-first pb-3">
                <statistics/>
                <danger-zone class="my-3 d-none d-md-inline-block" />
            </div>

            <div class="col-md-4 pt-3 pt-md-0 pb-md-0 d-none d-md-inline-block">
                <div class="gradient--background d-flex p-2">
                    <p class="align-self-center m-0 ml-3 white">Regler</p>
                </div>
                <div class="rules">
                    <rules-input/>
                </div>

            </div>
            
        </div>
  	</div>
</template>

<script>
import ActionButton from '~/components/buttons/ActionButton';
import Wrapper from '~/components/layouts/positioning/Wrapper';
import Notifications from '~/components/notifications/Notifications';
import RulesInput from '~/components/event/RulesInput';
import CreateNotifications from '~/components/notifications/CreateNotifications';
import Statistics from '~/components/admin/statistics/Statistics';
import DangerZone from '~/components/admin/dangerzone/DangerZone';
export default {
    head () {
        return {
        titleTemplate: 'Eventöversikt %s',
        }
    },
    layout: 'admin',
    middleware: 'auth-admin',

    components: {
        ActionButton,
        Wrapper,
        Notifications,
        RulesInput,
        CreateNotifications,
        Statistics,
        DangerZone
    }
}

</script>

<style lang="scss" scoped>

    .header {
        height: 50px;
        border-radius: 4px;
        box-sizing: border-box;
    }

    textarea {
        resize: none;
    }
    .buttons {
      width: 100px;
    }
    .text {
      font-size: 11px;
    }


</style>
