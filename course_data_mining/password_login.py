# -*- coding: UTF-8 -*-

password_list = ["*#*#", "123"]
n = 0

# 输入与list第一个元素“*#*#”相等则用于修改密码，与list最后一个元素相等则登陆成功


def password_login():

    s = str(input())
    global n

    if (s == password_list[-1]):
        print("login successfully")
    elif (s == password_list[0]):
        password_list.append(s)
        print("change password sucessfully")
        password_login()
    else:
        print("wrong password or invalid input")

        # 尝试次数超过三次
        n = n+1
        if (n == 3):
            print("try times exceeded")
            n = 0
            return
        password_login()


password_login()
