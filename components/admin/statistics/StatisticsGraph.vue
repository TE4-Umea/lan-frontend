<template>
<div>
    <div>
        <svg 
            class="ml-2 graph" 
            id="chart" 
            :height="chartHeight" 
            :width="chartWidth" 
            >
            <g
                v-for="(value, i) in chartData"
                :transform="`translate(${i * (barWidth + 10)}, 0)`"
                :key="i"
                >
                <rect :fill="value.color" :width="barWidth" :height="barHeight(value.amount)"></rect>
            </g>
        </svg>
        <hr class="m-0">
        <div class="d-flex align-item-center" 
            v-for="(value, i) in chartData"
            :key="i">
            <i class="pt-1 material-icons" :style="{color: value.color}">label_important</i>
            <p class="mb-0">{{ value.name }}</p>
        </div>
    </div>
    <div>

    </div>
</div>
</template>

<script>
export default {
    props: ['registrations'],
    data() {
        return {
            chartHeight: 200,
            chartWidth: 180 - 10,
            chartData: [],
        }
    },
    methods: {
        countOccurences(key, value) {
            return this.registrations.filter(index => {
                return index[key] == value;
            }).length;
        },
        barHeight(value) {
            return this.chartHeight / this.dataMax() * value;
        },
        dataMax() {
            return Math.max(...this.chartData.map(object => {
                return object.amount;
            }));
        },
    },
    mounted() {
        const laptops = this.countOccurences("setup_type", 'Laptop');
        this.chartData = [{
                name: 'Stationär',
                amount: this.countOccurences("setup_type", "Stationär"),
                color: "#DA0890",
            }, {
                name: 'Laptop',
                amount: laptops,
                color: "#0DE1EC",
            }, {
                name: 'Ingen',
                amount: this.countOccurences("setup_type", "Ingen"),
                color: "#4F0082",
        }];
    },
    
    computed: {
        barWidth() {
            return this.chartWidth / this.chartData.length - 10;
        },
         
    },
}
</script>

<style lang="scss" scoped>
.graph {
    transform: rotate(180deg);
}


</style>