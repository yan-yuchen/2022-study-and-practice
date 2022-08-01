<template>
  <div class="card edit-field">
    <div class="card-body">
      <label for="edit-post" class="form-label">编辑帖子</label>
      <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
      <!-- @click绑定函数post_a_post,点击调用函数post_a_post -->
      <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">发帖</button>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';

export default {
    name: "UserProfileWrite",
    setup(props, context) {
        let content = ref('');

        const post_a_post = () => {
            context.emit('post_a_post123', content.value);  // 触发父组件中的post_a_post
            content.value = "";
        };

        return {
            content,
            post_a_post,
        }
    }
}
</script>


<style scoped>
.edit-field {
    margin-top: 20px;
}

button {
    margin-top: 10px;
}
</style>
