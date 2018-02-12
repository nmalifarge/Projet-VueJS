import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import AddMovie from './components/AddMovie.vue';
import MovieList from './components/MovieList.vue';
import EditMovie from './components/EditMovie.vue';
import MovieDetails from './components/MovieDetails.vue';

const routes = [
  {
        name: 'AddMovie',
        path: '/add/movie',
        component: AddMovie
    },
    {
          name: 'MovieList',
          path: '/',
          component: MovieList
      },
      {
            name: 'EditMovie',
            path: '/edit/:id',
            component: EditMovie
        },
        {
              name: 'MovieDetails',
              path: '/details/:id',
              component: MovieDetails
          }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
