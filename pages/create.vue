<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h1> Information </h1>
                <form>
                    <div class="form-group">
                        <v-date-picker
                            :min-date='new Date()'
                            v-model="date"
                            mode="range"

                        />
                        <!-- <label for="lan-time">Lanet pågår under tiden</label>
                        <input type="text" id="lan-time" class="form-control" placeholder="Datum">
                        <label for="registration-date">Senaste anmälningstid är</label>
                        <input type="text" id="registration-date" class="form-control" placeholder="Datum"> -->
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
    export default {
    components: {
    },
    data(){
      return {
        date: {
          start: null, // From the beginning of time
          end: null // Until today
        }
      }

    }
  }
</script>


<style lang="scss" scoped>
.container {
    margin-top: 50px;
}
.col-md-3 {
    margin-right: 100px;
}
</style>
