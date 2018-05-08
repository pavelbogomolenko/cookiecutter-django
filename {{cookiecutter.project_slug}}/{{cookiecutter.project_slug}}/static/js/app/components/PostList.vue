{% raw %}<template lang="html">
    <div>
        <h1>{{ msg }}</h1>
        <ul>
            <router-link
                    v-for="post in posts"
                    :key="post.id"
                    active-class="is-active"
                    class="link"
                    tag="li"
                    :to="{ name: 'postdetail', params: { id: post.id, post: post } }">
                 <a>{{ post.title }}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import api from './RestAPI';

    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js SPA',
                posts: null,
            }
        },
        created() {
            this.getAllPosts();
        },
        methods: {
            getAllPosts() {
                api.getAllPosts()
                    .then(posts => {
                        this.posts = posts;
                    });
            }
        }
    }
</script>{% endraw %}
