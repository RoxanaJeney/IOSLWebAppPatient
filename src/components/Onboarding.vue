<template>
    <div class="action">
        <b-button @click="modalShow = !modalShow">Open for Boarding</b-button>

        <b-modal v-model="modalShow">

            <qrcode :value="'did: ' + qrData.did + ' verkey: ' + qrData.verkey" :options="{ width: 200 }"></qrcode>

        </b-modal>


    </div>
</template>

<script>
    export default {
        name: "Onboarding",
        data() {
            return {
                modalShow: false,
                qrData: null
            }
        },
        methods: {
            loadProofRequest() {

                this.$http.get('wallet/default', {
                    headers: {
                        Authorization: this.$store.state.token
                    }
                }).then(r => {

                    this.qrData = r.body.dids[0];
                })
            }
        },
        beforeMount() {
            this.loadProofRequest();
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