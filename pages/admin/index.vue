<template>
  	<div class="container pt-4">
        <div class="row">
            <div class="col-md-5">
                <div class="header gradient--background d-flex">
                    <p class="align-self-center m-0 ml-3 title">Statistik</p>
                </div>
                <div class="stats">
                </div>
            </div>

            <div class="col-md-3">
                <div>

                    <div class="header gradient--background d-flex">
                        <p class="align-self-center m-0 ml-3 title">Skapa ny pushnotis</p>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control mb-1" placeholder="Titel....">
                        <textarea name="" cols="5" rows="5" class="form-control" placeholder="Meddelande...."/>
                    </div>
                    <div class="d-flex">
                      <action-button class="my-2 mt-md-4 mr-4" primary="true" title="Förhandsgranska"/>
                      <action-button class="my-2 mt-md-4" primary="true" title="Skicka"/>
                    </div>

                    <div class="notifications d-flex">
                        <notifications/>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="header gradient--background d-flex">
                    <p class="align-self-center m-0 ml-3 title">Regler</p>
                </div>
                <div class="rules">
                    <rules-input/>
                </div>

            </div>
        </div>
  	</div>
</template>

<script>
import ActionButton from '~/components/buttons/ActionButton'
import Wrapper from '~/components/layouts/positioning/Wrapper'
import Notifications from '~/components/notifications/Notifications'
import RulesInput from '~/components/event/RulesInput'
export default {
  middleware: 'auth-admin',


components: {
    ActionButton,
    Wrapper,
    Notifications,
    RulesInput,
  }
}

</script>

<style lang="scss" scoped>

    .header {
        height: 50px;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .title {
        color: white;
    }
    .stats {
        background-color: #eee;
        width: 100%;
        height: 40vh;
    }

    textarea {
        resize: none;
    }
    .rules {
      background-color: white;
    }
    .buttons {
      width: 100px;
    }
    .text {
      font-size: 11px;
    }


</style>
