import "./jquery-3.3.1.min.js"
import "./vertical-responsive-menu.js"
import "../styles/vendor/bootstrap/js/bootstrap.bundle.min.js"
import "../styles/vendor/OwlCarousel/owl.carousel.js"
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import "../styles/vendor/semantic/semantic.min.js"
import "./custom.js"
import "./night-mode.js"

import "../styles/app.scss";

import Vue from 'vue';
import Test from "../scripts/vue/Test.vue";

console.log("hello from webpack");

new Vue({
  el: '#vue',
  render: h => h(Test)
});