// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/sass/element-variables.scss'
import ElementUI from 'element-ui';

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  
  Vue.use(ElementUI);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

}
