<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/29150_lg_1f2ac240fe.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullName }}</div>
                    <div class="fans">粉丝：{{ user.followerCount }}</div>
                    <!-- v-if判断，没有关注的话就是关注按钮，已经关注的话就是取消关注按钮 -->
                    <!-- v-on:click或@click属性：绑定事件 -->
                    <button @click="follow1234" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
                    <button @click="unfollow1234" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    // computed：动态计算某个数据
    // props：存储父组件传递给子组件的数据
    setup(props, context) {
        // 从UserProfileView中读取user数据
        let fullName = computed(() => props.user.lastName + ' ' + props.user.firstName);

        // 关注函数
        const follow1234 = () => {
            context.emit('follow123');   //context.emit()：触发父组件绑定的函数
        };

        // 取消关注函数
        const unfollow1234 = () => {
            context.emit("unfollow123"); // 触发父组件UserProfileView中unfollow函数
        }

        return {
            fullName,
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

</style>
