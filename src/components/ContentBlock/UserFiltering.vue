<template>
    <v-col
        cols="12"
        md="4"
    >
        <v-select
            v-model="countryFilter"
            :items="country"
            item-value="id"
            item-text="label"
            clearable
            label="Filter by country"
        ></v-select>

        <v-select
            v-model="scoreFilter"
            :items="scores"
            item-value="value"
            item-text="label"
            clearable
            label="Filter by score"
        ></v-select>
    </v-col>
</template>

<script>
export default {
    name: 'UserFiltering',
    computed: {
        country() {
            return this.$store.getters.country
        },
        scores() {
            return this.$store.getters.scores
        },
        countryFilter: {
            get() {
                return this.$store.getters.countryFilter
            },
            set(val) {
                this.$store.dispatch('users/selectCountry', val)
            },
        },
        scoreFilter: {
            get() {
                return this.$store.getters.scoreFilter
            },
            set(val) {
                this.$store.dispatch('users/selectScore', val)
            },
        },
    },
}
</script>
