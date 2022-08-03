<template>
  <ContentBase>
      <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
          <UserProfileWrite v-if="is_me" @post_a_post="post_a_post" />
        </div>
        <div class="col-9">
          <UserProfilePosts :user="user" :posts="posts" @delete_a_post="delete_a_post" />
        </div>
      </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'
import UserProfileInfo from '../components/UserProfileInfo';
import UserProfilePosts from '../components/UserProfilePosts';
import UserProfileWrite from '../components/UserProfileWrite';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import $ from 'jquery';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'UserList',
  components: {
      ContentBase,
      UserProfileInfo,
      UserProfilePosts,
      UserProfileWrite
  },

  // 初始化变量、函数
  setup() {
    const store = useStore();
    const route = useRoute();
    const userId = parseInt(route.params.userId);
    const user = reactive({});
    const posts = reactive({});

    // 获取用户信息
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "GET",
      data: {
        user_id: userId,
      },
      headers: {
        'Authorization': "Bearer " + store.state.user.access,
      },
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;
      }
    });

    // 获取用户的所有帖子
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/",
      type: "GET",
      data: {
        user_id: userId,
      },
      headers: {
        'Authorization': "Bearer " + store.state.user.access,
      },
      success(resp) {
        posts.count = resp.length;
        posts.posts = resp;
      }
    });

    // 关注函数
    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount ++ ;
    };

    // 取消关注函数
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount -- ;
    };

    //发送文本信息
    const post_a_post = (content) => {
      posts.count ++ ;
      posts.posts.unshift({  //最前面添加元素
        id: posts.count,
        userId: 1,
        content: content,
      })
    };

    // 删除帖子
    const delete_a_post = post_id => {
      posts.posts = posts.posts.filter(post => post.id !== post_id);
      posts.count = posts.posts.length;
    }
    
    const is_me = computed(() => userId === store.state.user.id);

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
      delete_a_post,
      is_me,
    }
  }
}
</script>

<style scoped>
</style>
