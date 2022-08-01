<template>
    <div class="card">
        <div class="card-body">
            <!-- v-for是循环，相当于有多少个post建多少个div -->
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card single-post">
                    <div class="card-body">
                        {{ post.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserProfilePosts",
    props: {
        posts: {
            type: Object,
            required: true,
        },
    }
}
</script>


<style scoped>
.single-post {
    margin-bottom: 10px;
}
</style>
