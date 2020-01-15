//TODO: Fix borked placements of forms.
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h1> Information </h1>
                <form>
                    <div class="form-group">
                      <label for="lan-start">Lanet börjar:</label>
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
                        <label for="last-registration-date">Sista anmälningsdatum.</label>
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
                </form>
            </div>
            <div class="col-md-4">
                <h1>Ytterligare information </h1>
                    <div class="form-group">
                    <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
            <div class="col-md-4">
                <h1>Regler </h1>
                <form>
                    <div class="form-group">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import timePicker from 'vue2-timepicker'
    export default {
    components: {
      timePicker,
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

.container {
    margin-top: 50px;
}
.col-md-3 {
    margin-right: 100px;

}
.form-group {
  display: inline-block;
}
</style>
