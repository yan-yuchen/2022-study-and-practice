import $ from 'jquery';
import jwt_decode from 'jwt-decode';

const ModuleUser = {
  state: {
    id: "",
    username: "",
    photo: "",
    followerCount: 0,
    access: "",
    refresh: "",
    is_login: false,
  },
  getters: {
  },
  mutations: {
      updateUser(state, user) {
          state.id = user.id;
          state.username = user.username;
          state.photo = user.photo;
          state.followerCount = user.followerCount;
          state.access = user.access;
          state.refresh = user.refresh;
          state.is_login = user.is_login;
      },
      // 更新令牌
      updateAccess(state, access) {
          state.access = access;
      },
      // 退出登陆
      logout(state) {
          state.id = "";
          state.username = "";
          state.photo = "";
          state.followerCount = 0;
          state.access = "";
          state.refresh = "";
          state.is_login = false;
      }
  },
  actions: {
    // 登陆
      login(context, data) {
        $.ajax({
            // 先获取token
            url: "https://app165.acapp.acwing.com.cn/api/token/",
            type: "POST",
            data: {
                username: data.username,
                password: data.password,
            },
            // 成功回调函数
            success(resp) {
                const {access, refresh} = resp;
                // jwt解码
                const access_obj = jwt_decode(access);

                // 每隔4.5分钟刷新一次
                setInterval(() => {
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                        type: "POST",
                        data: {
                            refresh,
                        },
                        success(resp) {
                            context.commit('updateAccess', resp.access);
                        }
                    });
                }, 4.5 * 60 * 1000);

                // 获取用户信息
                $.ajax({
                    url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                    type: "GET",
                    data: {
                        user_id: access_obj.user_id,
                    },
                    // jwt授权
                    headers: {
                        'Authorization': "Bearer " + access,
                    },
                    success(resp) {
                        // 成功登陆则调用updateuser
                        context.commit("updateUser", { 
                            ...resp,
                            access: access,
                            refresh: refresh,
                            is_login: true,
                        });
                        data.success();
                    },
                })
            },
            error() {
                data.error();
            }
        });
      },
  },
  modules: {
  }
};

export default ModuleUser;
