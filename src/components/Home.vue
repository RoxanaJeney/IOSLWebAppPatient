<template>
  <div class="home">

    <v-container class="my-5">

      <v-card flat v-for="vacc in vaccs" :key="vacc.title">
        <v-layout row wrap :class="`pa-3 vacc ${vacc.status}`">
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Vaccine</div>
            <div>{{ vacc.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Date of Vaccination</div>
            <div>{{ vacc.date }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Manufacturer</div>
            <div>{{ vacc.manu }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Expiration Date</div>
            <div>{{ vacc.validDate }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Doctor</div>
            <div>{{ vacc.sign }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <Payment />
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
  components: { Payment },
  data() {
    return {
      vaccs: [
        { id: 1, title: 'Chickenpox', date: '08.10.2018', manu: 'Bayer', batchID: '56', validDate: '20.06.2028', sign:'Anna Baker'},
        { id: 2, title: 'Whooping Cough', date: '05.05.2019', manu: 'Bayer', batchID: '67', validDate: '05.05.2029', sign:'Berta Joe'},
        { id: 3, title: 'Tetanus', date: '09.09.2009', manu: 'Bayer', batchID: '78', validDate: '09.09.2029', sign:'Hank Smith'},
        { id: 4, title: 'Poliomyelitis', date: '08.09.2012', manu: 'Bayer', batchID: '89', validDate: '08.09.2022', sign:'Gertrud Bayer'},
      ]
    }
  }
}
</script>
