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
        methods: {
            async checkout () {
                // args - is an object containing the billing and shipping address if enabled
                // eslint-disable-next-line no-unused-vars
                const { token, args } = await this.$refs.checkoutRef.open();
            },
            done ({token, args}) {
                // token - is the token object
                // args - is an object containing the billing and shipping address if enabled
                // do stuff...
                // eslint-disable-next-line no-console
                console.log(token + ' ' + args);
            },
            opened () {
            },
            closed () {
                // do stuff
            },
            canceled () {
                // do stuff
            }
        }
    }
</script>