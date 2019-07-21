<template>
    <div class="home">

        <v-container class="my-5">

            <v-card flat v-for="vacc in vaccs" :key="vacc.referent">
                <v-layout row wrap :class="`pa-3 vacc ${vacc.status}`">

                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Vaccine</div>
                        <div>{{ vacc.vaccine_namestring }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Date of Vaccination</div>
                        <div>{{ vacc.vaccine_datedate }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Manufacturer</div>
                        <div>{{ vacc.manufacturer_namestring }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Expiration Date</div>
                        <div>{{ vacc.valid_untilstring }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Doctor</div>
                        <div>Test</div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>

        </v-container>

        <v-container class="my-5">

            <v-card flat v-for="off in offers" :key="off.id">
                <v-layout row wrap :class="`pa-3 off ${off.status}`">

                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Notification</div>
                        <div>New Vaccination Request</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Offer ID</div>
                        <div>{{ off.id }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text"></div>
                        <div>  </div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text"></div>
                        <div>  </div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <Payment :credential_id="off.id"/>
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
                offers: null
            }
        },
        methods: {
            loadProofRequest() {

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
            },
            loadCredentialOffers() {

                this.$http.get('credentialoffer', {
                    headers: {
                        Authorization: this.$store.state.token
                    }
                }).then(r => this.offers = r.data)
            }
        },
        beforeMount() {
            this.loadProofRequest();
            this.loadCredentialOffers();
        }
    }
</script>
