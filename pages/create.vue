//TODO: Fix borked placements of forms.
<template>
<div class="container pt-4">
    <div class="row">
        <div class="col-md-4">
            <h1>Tider</h1>
            <label for="lan-start">Lanet börjar:</label>
            <div class="d-flex">

                <v-date-picker id="lan-start"
                        :min-date='new Date()'
                        v-model="eventDates.dates"
                        mode="range"
                        placeholder="Välj datum"

                />
                <time-picker
                    hide-disabled-items
                    :minute-interval="5"
                    hour-label="Timme" minute-label="Minut"
                    v-model="eventDates.startTime"
                />
            </div>

            <label for="last-registration-date">Sista anmälningsdatum.</label>
            <div class="d-flex">

                <v-date-picker id="last-registration-date"
                    :min-date='new Date()'
                    v-model="registerClosure.date"
                    placeholder="Välj datum"

                />
                <time-picker
                    hide-disabled-items
                    :minute-interval="5"
                    hour-label="Timme" minute-label="Minut"
                    v-model="registerClosure.time"
                />
            </div>
        </div>
        <div class="col-md-4 order-md-last">
            <h1>Regler <br> </h1>
            <div style="height:100%">
                <rules-input> </rules-input>
            </div>
        </div>
        <div class="col-md-4">
            <h1>Information </h1>
            <textarea class="form-control" rows="10"></textarea>

            <div class="m-0 py-4 d-flex justify-content-center">

                <action-button
                    title="Publicera Event"
                    icon="done"
                    primary="true"
                />
            </div>
        </div>

    </div>
</div>
</template>

<script>
import timePicker from 'vue2-timepicker'
import RulesInput from '~/components/event/RulesInput'
import ActionButton from '~/components/buttons/ActionButton'
    export default {
    components: {
      timePicker,
      RulesInput,
      ActionButton,
    },
    data(){
      return {
        eventDates: {
          dates:  {
            start: undefined,
            end: undefined
          },
          startTime: {
              HH: '16',
              mm: '30',
          }
        },
        registerClosure: {
          date: new Date(),
          time: {
            HH: '15',
            mm: '00'
          }
        }
      }

    }
  }
</script>

<style lang="sass">
@import 'vue2-timepicker/dist/VueTimepicker.css'
</style>

<style lang="scss" scoped>
h1 {
  padding: 10px 0;
}
textarea {
  resize: none;
}
</style>
