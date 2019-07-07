<template>
    <div>
        <vue-stripe-checkout
                ref="checkoutRef"
                :image="image"
                :name="name"
                :description="description"
                :currency="currency"
                :amount="amount"
                :allow-remember-me="false"
                @done="done"
                @opened="opened"
                @closed="closed"
                @canceled="canceled"
        ></vue-stripe-checkout>
        <button @click="checkout">Checkout</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                image: 'https://svgsilh.com/svg_v2/1294131.svg',
                name: 'Payment Boost Vaccination.',
                description: 'Payment Vaccination',
                currency: 'USD',
                amount: 1500
            }
        },
        props: {credential_id: String},
        methods: {
            async checkout() {
                // args - is an object containing the billing and shipping address if enabled
                // eslint-disable-next-line no-unused-vars
                const {token, args} = await this.$refs.checkoutRef.open();
            },
            // eslint-disable-next-line no-unused-vars
            done({token, args}) {

                const params = {
                    'stripeToken': token.id,
                    'currency': 'USD',
                    'amount': this.$data.amount,
                    'description': this.$data.description,
                    'stripeEmail': 'test@test.de',
                    'credentialOfferId': this.credential_id
                };

                // eslint-disable-next-line no-console

                this.$http.post('credentialrequest', params, {
                    headers: {
                        Authorization: this.$store.state.token
                    }
                });


                // eslint-disable-next-line no-console
                this.$notify({
                    group: 'foo',
                    title: 'Success message',
                    text: 'Successful transaction!',
                    type: 'success'
                });
            },
            opened() {
            },
            closed() {
                // do stuff
            },
            canceled() {
                this.$notify({
                    group: 'foo',
                    title: 'Failure Message',
                    text: 'Interrupted transaction!',
                    type: 'error'
                });
            }
        }
    }
</script>