<template>
    <v-toolbar dense fixed color="yellow">
        <v-toolbar-title class="black--text bolder" :to="{name: 'home'}"> My Yellow Book
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-btn class="black--text" flat dark :to="{name: 'Vacc'}" exact>
                <span class="hidden-sm-and-down">Vacc</span>
            </v-btn>
            <v-btn class="black--text" flat dark :to="{name: 'Home'}" exact>
                <span class="hidden-sm-and-down">Reboost</span>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

    export default {
        name: "TopBar",
        data() {
            return {
                connected: true
            };
        },
    };

</script>

<style scoped>
    .bolder {
        font-weight: 600 !important;
        font-style: helvetica;
    }
</style>
