<template>
<div class="container pt-4">
    <div class="row">
        <div class="col-md-4">
            <h1 class="pb-2">Tider</h1>
            <div class="pb-2">

                <p for="name" class="m-0" >Lanets namn:</p>
                <input 
                    min="3" 
                    type="text" 
                    class="form-control primary-color name-input" 
                    v-model="form.title" 
                    placeholder="NTI Lan!" 
                    />
            </div>
            <div class="pb-2">
                <p for="lan-start" class="m-0">Lanet pågår:</p>
                <div class="d-flex">
                    <v-date-picker
                        is-dark
                        :min-date='new Date()'
                        v-model="form.eventDates.dates"
                        mode="range"
                        :input='["L", "DD-MM-YYYY", "DD/MM/YYYY"]'
                        placeholder="Välj datum"
                    />
                </div>
            </div>
            <div class="pb-2">
                <p class="m-0"> lanet öppnar:</p>
                <time-picker
                    hide-disabled-items
                    :minute-interval="5"
                    hour-label="Timme" minute-label="Minut"
                    v-model="form.eventDates.startTime"
                    />
            </div>
            <div class="pb-2">
                <p for="last-registration-date" class="m-0">Sista anmälningsdatum:</p>
                <div class="d-flex">
                    <v-date-picker id="last-registration-date"
                        is-dark
                        class="pr-3"
                        :min-date='new Date()'
                        v-model="form.registerClosure.date"
                        placeholder="Välj datum"

                    />
                    <time-picker
                        hide-disabled-items
                        :minute-interval="5"
                        hour-label="Timme" minute-label="Minut"
                        v-model="form.registerClosure.time"
                    />
                </div>
            </div>
        </div>
        <div class="col-md-4 order-md-last">
            <h1 class="pb-2">Regler</h1>
            <rules-input />
        </div>
        <div class="col-md-4">
            <h1 class="pb-2">Information</h1>
            <textarea 
                min="3"
                class="form-control primary-color" 
                rows="10" 
                v-model="form.short_info"
                />
            <div class="m-0 py-4 d-flex justify-content-center">
                <action-button
                    title="Publicera Event"
                    icon="done"
                    primary="true"
                    @onAction="submit"
                    :disabled="!isValid"
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
    head() {
        return {
            titleTemplate: 'Publicera event %s',
        }
    },
    layout: 'admin',
    middleware: [
        'auth-admin',
        'event/exists'
    ],
    data() {
        return {
            isValid: false,
            form: {
                short_info:'',
                title:'',
                eventDates: {
                    dates:  {
                        start: undefined,
                        end: undefined
                    },
                    startTime: {
                        HH: '16',
                        mm: '30',
                    },
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
    },
    methods: {
        submit() {
            let payload = {
                title: this.form.title,
                short_info: this.form.short_info,
                rules_id: 1,
                start_date: this.parseDateTime(this.form.eventDates.dates.start, this.form.eventDates.startTime),
                end_date: this.form.eventDates.dates.end,
                registration_closes_at: this.parseDateTime(this.form.eventDates.dates.start, this.form.eventDates.startTime)

            };
            this.$axios.post('/admin/event/create', payload)
                .then(res => {})
                .catch(err => console.log(err));
        },
        parseDateTime(date, time) {
            date.setHours(time.HH, time.mm);
            return date;
        }
    },
    watch: {
        form: {
            handler(oldVal, newVal) {
                this.isValid = this.form.short_info.length > 3 &&
                    this.form.title.length > 3 &&
                    this.form.eventDates.dates.start &&
                    this.form.eventDates.dates.end &&
                    this.form.eventDates.startTime.HH.length > 1 &&
                    this.form.eventDates.startTime.mm.length > 1 &&
                    this.form.registerClosure.time.HH.length > 0 &&
                    this.form.registerClosure.time.mm.length > 0 &&
                    this.form.registerClosure.date;
                    //If it looks stupid but works; it ain't stupid.
            },
            deep: true
        }
    },
    components: {
      timePicker,
      RulesInput,
      ActionButton,
    },
}
</script>

<style lang="sass">
@import 'vue2-timepicker/dist/VueTimepicker.css'
</style>

<style lang="scss" scoped>

.vue__time-picker.dropdown ul li {
    color: unset;
} 
.name-input {
    max-width: 200px;
}
textarea,textarea:focus,input,input:focus {
  resize: none;
  background: none !important;
}
</style>