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
            <div class="caption grey--text">Vaccination</div>
            <div>{{ vacc.NrVacc }}/{{ vacc.NrVaccTotal }}</div>
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
            <div class="caption grey--text">Doctor</div>
            <div>{{ vacc.sign }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <Payment/>
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
        { id: 1, title: 'Chickenpox', NrVacc: 1, NrVaccTotal: 3, date: '2019-03-08', manu: 'Bayer', batchID: '56', validDate: '2023-07-04', sign:'Anna Baker'},
        { id: 2, title: 'Chickenpox', NrVacc: 2, NrVaccTotal: 3,date: '2019-04-05', manu: 'Bayer', batchID: '67', validDate: '2033-03-03', sign:'Anna Baker'},
        { id: 3, title: 'Chickenpox', NrVacc: 3, NrVaccTotal: 3,date: '2019-05-09', manu: 'Bayer', batchID: '78', validDate: '2023-07-04', sign:'Hank Smith'},
        { id: 4, title: 'Poliomyelitis', NrVacc: 1, NrVaccTotal: 3,date: '2019-06-06', manu: 'Bayer', batchID: '89', validDate: '2019-06-03', sign:'Gertrud Bayer'},
      ]
    }
  }
}
</script>
