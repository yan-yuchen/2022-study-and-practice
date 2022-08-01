<template>
  <ContentBase>
      <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow123="follow" @unfollow123="unfollow" :user="user" />
          <UserProfileWrite @post_a_post123="post_a_post" />
        </div>
        <div class="col-9">
          <UserProfilePosts :posts="posts" />
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
    const user = reactive({
      id: 1,
      username: "YanYuchen",
      lastName: "Yan",
      firstName: "Yuchen",
      followerCount: 0,
      is_followed: false,
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "今天上了web课真开心",
        },
        {
          id: 2,
          userId: 1,
          content: "今天上了算法课，更开心了",
        },
        {
          id: 3,
          userId: 1,
          content: "今天上了acwing ，开心极了",
        },
      ]
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

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post
    }
  }
}
</script>

<style scoped>
</style>
