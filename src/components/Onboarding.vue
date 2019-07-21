<template>
    <div class="action">
        <b-button @click="modalShow = !modalShow">Open for Boarding</b-button>

        <b-modal v-model="modalShow">

            <qrcode value="Hello, Worldd!" :options="{ width: 200 }"></qrcode>

        </b-modal>


    </div>
</template>

<script>
    export default {
        name: "Onboarding",
        data() {
            return {
                modalShow: false
            }
        }
    }
</script>

<style scoped>
    .action {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>