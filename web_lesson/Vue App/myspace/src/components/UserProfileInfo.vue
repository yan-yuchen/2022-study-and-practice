<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 img-field">
                    <img class="img-fluid" :src="user.photo" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ user.username }}</div>
                    <div class="fans">粉丝：{{ user.followerCount }}</div>
                    <button @click="follow1234" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
                    <button @click="unfollow1234" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        const store = useStore();
        // 关注函数
        const follow1234 = () => {
            $.ajax({
              url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
              type: "POST",
              data: {
                  target_id: props.user.id,
              },
              headers: {
                  'Authorization': "Bearer " + store.state.user.access,
              },
              success(resp) {
                if (resp.result === "success") {
                      context.emit('follow');       //context.emit()：触发父组件绑定的函数

                  }
              }
            });
        };

        // 取消关注函数
        const unfollow1234 = () => {
            $.ajax({
              url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
              type: "POST",
              data: {
                  target_id: props.user.id,
              },
              headers: {
                  'Authorization': "Bearer " + store.state.user.access,
              },
              success(resp) {
                  if (resp.result === "success") {
                      context.emit('unfollow');   // 触发父组件UserProfileView中unfollow函数

                  }
              }
            });
        }

        return {
            follow1234,
            unfollow1234,
        }
    }
}
</script>


<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}

.img-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

