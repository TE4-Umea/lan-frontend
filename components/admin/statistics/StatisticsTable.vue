<template>
  <div class="">
    <table class="table table-striped" :class="{'table-dark': $store.state.darkmode.value}">
        <thead>
            <tr>
            <th scope="col" class="d-none">Title</th>
            <th scope="col" class="d-none">nummer</th>
            
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Antal anmälda</td>
                <td>{{registrations.length}}</td>
            </tr>
            <tr>
                <td>Antal närvarande</td>
                <td>{{ attending }}</td>
            </tr>
            <tr>
                <td>Unika gruppkoder</td>
                <td>{{ groupCodes }}</td>
            </tr>
            <tr>
                <td>Stationär / konsol</td>
                <td>{{ setupTower }}</td>
            </tr>
            <tr>
                <td>Laptop</td>
                <td>{{ setupLaptop }}</td>
            </tr>
            <tr>
                <td>Ingen</td>
                <td>{{ setupNone }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props: ['registrations'],
    methods: {
        countOccurences(key, value) {
            if(this.registrations.length == 0) return 0;
            return this.registrations.filter(index => {
                return index[key] == value;
            }).length;
        },
        findUnique(key) {
            const codes = this.registrations.filter(object => {
                return object[key];
            });
            return codes.filter((value, index, self) => { 
                return self.indexOf(value) === index;
            }).length;
        }
    },
    computed: {
        attending() {
            return this.countOccurences("checked_in", 1);
        },

        groupCodes() {
            return this.findUnique('group_code');
        },

        setupTower() {
            return this.countOccurences("setup_type", 'Stationär');
        },

        setupLaptop() {
            return this.countOccurences("setup_type", 'Laptop');
        },

        setupNone() {
            return this.countOccurences("setup_type", 'Ing');
        },
    }
    
}
</script>

<style>

</style>