<template>
    <v-container>
        <v-row
            align="center"
            justify="center"
            class="ma-4"
        >
            <v-col cols="12">
                <v-img
                    src="@/assets/logo.svg"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>

            <UserFiltering />
            <ListUsers />
        </v-row>
    </v-container>
</template>

<script>
import UserFiltering from "./UserFiltering";
import ListUsers from "./ListUsers";

export default {
    name: 'ContentBlock',
    components: {
        UserFiltering,
        ListUsers
    },
    data() {
        return {

        }
    }
}
</script>
