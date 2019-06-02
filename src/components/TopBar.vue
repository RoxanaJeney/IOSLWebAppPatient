<template>
    <v-toolbar dense fixed color="yellow">
        <v-toolbar-title class="black--text bolder" :to="{name: 'home'}">
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
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
