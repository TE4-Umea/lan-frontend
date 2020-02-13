<template>
<div class="d-contrast outline-border">
    <div class="gradient--background d-flex p-2">
        <p class="align-self-center m-0 ml-3 white">Statistik</p>
    </div>
    <div>
        <b-container class="pt-5">
            <b-row>
                <b-col>
                    <statistics-graph v-if="registrations.length > 0" :registrations="registrations" />
                    <div v-else 
                        class="d-flex justify-content-center">
                        <div 
                            :class="{'text-light': $store.state.darkmode.value}"
                            class="spinner-border my-3" 
                            role="status">
                            <span class="sr-only ">Loading...</span>
                        </div>
                    </div>
                </b-col>
                <b-col cols="6" class="d-none d-md-inline-block">
                    <statistics-table :registrations="registrations" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</div>
</template>

<script>
import StatisticsTable from '~/components/admin/statistics/StatisticsTable';
import StatisticsGraph from '~/components/admin/statistics/StatisticsGraph';
export default {
    components: {
        StatisticsTable,
        StatisticsGraph,
    },
    data() {
        return {
            registrations: [],
        }
    },
    async mounted() {
        await this.$store.dispatch('admin/GET_REGISTRATIONS');
        this.registrations = this.$store.state.admin.registrations;
    },
}
</script>

<style lang="scss" scoped>

.outline-border {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>