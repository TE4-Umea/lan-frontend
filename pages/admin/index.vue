<template>
  	<div class="container pt-4">
        <div class="row">
            <div class="col-md-5">
                <div class="gradient--background d-flex p-2">
                    <p class="align-self-center m-0 ml-3 white">Statistik</p>
                </div>
                <div class="stats">
                </div>
            </div>

            <div class="col-md-3">
                <div>

                    <create-notifications />

                    <div class="notifications d-flex">
                        <notifications/>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
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
export default {
  middleware: 'auth-admin',


components: {
    ActionButton,
    Wrapper,
    Notifications,
    RulesInput,
    CreateNotifications,
  }
}

</script>

<style lang="scss" scoped>

    .header {
        height: 50px;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .stats {
        background-color: #eee;
        width: 100%;
        height: 40vh;
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
