// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import HeaderComponent from '@/components/Header'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyAX78S4dACcaRm3Jzsdq--kB9WeDVLITPE',
  authDomain: 'locationx-72d68.firebaseapp.com',
  databaseURL: 'https://locationx-72d68.firebaseio.com',
  projectId: 'locationx-72d68',
  storageBucket: 'locationx-72d68.appspot.com',
  messagingSenderId: '758432149096'
}
firebase.initializeApp(config)
// const database = firebase.database();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, HeaderComponent },
  template: '<App/>'
})
