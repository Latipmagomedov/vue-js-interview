<template>
    <v-col
        cols="12"
        md="4"
    >
        <v-card
            max-width="450"
            class="mx-auto"
            v-if="users.length"
        >
            <v-list three-line>
                <template v-for="(user, index) in users">
                    <v-subheader
                        v-if="user.header"
                        :key="user.header"
                        v-text="user.header"
                    ></v-subheader>

                    <v-divider
                        v-else-if="user.divider"
                        :key="index"
                        :inset="user.inset"
                    ></v-divider>

                    <v-list-item
                        v-else
                        :key="user.title"
                    >
                        <v-list-item-avatar @click="showAddress(user.address)">
                            <v-img :src="user.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="user.title"></v-list-item-title>
                            <v-list-item-subtitle>
                                Country: {{ user.country }},
                                Score: {{ user.score }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle v-html="user.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-card>

        <div class="text-center" v-else>
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>

        <UiDialog
            v-model="dialog"
            title="user address"
            :body="address"
        />
    </v-col>
</template>

<script>
import UiDialog from "../UI/UiDialog";

export default {
    name: 'ListUsers',
    components: {
        UiDialog
    },
    data() {
        return {
            dialog: false,
            address: ''
        }
    },
    computed: {
        users() {
            const countryFilterValue = this.$store.getters.countryFilter
            const scoreFilterValue = this.$store.getters.scoreFilter
            const usersList = this.$store.getters.users
            let result = usersList

            if (countryFilterValue) {
                result = usersList.filter(item => item.country === countryFilterValue)
            }
            if (scoreFilterValue) {
                result = usersList.filter(item => item.score > scoreFilterValue)
            }

            return result
        }
    },
    methods: {
        showAddress(address) {
            this.address = address
            this.dialog = true
        }
    }
}
</script>
