<template>
    <div class="home">

        <v-container class="my-5">

            <v-card flat v-for="off in offers">
                <v-layout row wrap :class="`pa-3 off ${off.status}`">

                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Notification</div>
                        <div>New Proof Request</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Proof Request ID</div>
                        <div>{{ off.id }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text"></div>
                        <div>  </div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <button v-on:click="triggerSnackBar">Accept Proof Request</button>
                        <div>  </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>

        </v-container>

    </div>
</template>

<script>
    import Payment from './Payment'


    export default {
        components: {Payment},
        data() {
            return {
                vaccs: null,
                offers: [{id: "5c42fe26e1b0cc00174dc0c9"}]
            }
        },
        methods: {
            loadCredentials() {

                this.$http.get('wallet/default/credential', {
                    headers: {
                        Authorization: this.$store.state.token
                    }
                }).then(r => {
                    let entries= {};
                    this.vaccs = r.data.forEach((item, index) => {

                        let values= {};

                        for(var propertyName in item.attrs) {
                            values[propertyName.replace("@", "")] = item.attrs[propertyName];
                        }

                        entries[index] = values;

                    });
                    this.vaccs = entries;
                })
                    .then(coins => {
                        // eslint-disable-next-line no-console
                        console.log(coins)
                    })
            },
            loadCredentialOffers() {

                this.$http.get('credentialoffer', {
                    headers: {
                        Authorization: this.$store.state.token
                    }
                }).then(r => this.offers = r.data)
                    .then(coins => {
                        // eslint-disable-next-line no-console
                        console.log(coins)
                    })
            },
            triggerSnackBar() {
                this.$notify({
                    group: 'foo',
                    title: 'Successful connection',
                    text: 'Successfully created connection offer!',
                    type: 'success'
                });
            }
        },
        beforeMount() {
            this.loadCredentials();
            this.loadCredentialOffers();
        }
    }
</script>