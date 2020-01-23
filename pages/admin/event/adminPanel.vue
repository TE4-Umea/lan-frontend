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
                <div class="header gradient--background d-flex">
                    <p class="align-self-center m-0 ml-3 title">Skapa ny pushnotis</p>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control mb-1" placeholder="Titel....">
                    <textarea name="" cols="5" rows="5" class="form-control" placeholder="Meddelande...."/>
                </div>
                <div class="notifications">
                    <notifications/>
                </div>
            </div>

            <div class="col-md-4">
                <div class="header gradient--background d-flex">
                    <p class="align-self-center m-0 ml-3 title">Regler</p>
                </div>
                <div class="rules">
                    <p>there's  gonna be rules here! </p>
                </div>

            </div>
        </div>
  	</div>
</template>

<script>
import ActionButton from '~/components/buttons/ActionButton'
import Wrapper from '~/components/layouts/positioning/Wrapper'
import Notifications from '~/components/notifications/Notifications'
export default {


components: {
    ActionButton,
    Wrapper,
    Notifications,
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

</style>
