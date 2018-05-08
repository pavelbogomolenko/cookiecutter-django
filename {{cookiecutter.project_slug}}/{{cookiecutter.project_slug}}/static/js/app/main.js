import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'postlist',
            component: PostList
        },
        {
            path:'/posts/:id',
            name:'postdetail',
            component: PostDetail,
            props: true
        }
    ]
});

new Vue({
    router
}).$mount('#app');
