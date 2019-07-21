<template>
    <div class="home">

        <v-container class="my-5">

            <v-card flat v-for="off in requests" :key="off.id">
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

    export default {
        components: {},
        data() {
            return {
                requests: null
            }
        },
        methods: {
            loadProofRequest() {

                this.$http.get('proofrequest', {
                    headers: {
                        Authorization: this.$store.state.token
                    }
                }).then(r => {
                    let entries= {};
                    this.requests = r.data.forEach((item, index) => {

                        let values= {};
                        for(var propertyName in item.message) {
                            values[propertyName.replace("@", "")] = item.message[propertyName];
                        }
                        entries[index] = values;

                    });
                    this.requests = entries;
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
            this.loadProofRequest();
        }
    }
</script>