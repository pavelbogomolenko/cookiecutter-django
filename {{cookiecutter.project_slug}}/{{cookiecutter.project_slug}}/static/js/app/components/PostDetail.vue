{% raw %}<template lang="html">
    <div>
        <h1>{{ msg }}</h1>
        <div class="post" v-if="post">
            <h3 class="user__username">{{ post.title }}</h3>
            <span>{{ post.body }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['post'],
        data() {
            return {
                msg: 'Post detail page',
            }
        }
    }
</script>{% endraw %}
