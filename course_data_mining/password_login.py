# -*- coding: UTF-8 -*-

password_list = ["*#*#", "123"]
n = 0

# ������list��һ��Ԫ�ء�*#*#������������޸����룬��list���һ��Ԫ��������½�ɹ�


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

        # ���Դ�����������
        n = n+1
        if (n == 3):
            print("try times exceeded")
            n = 0
            return
        password_login()


password_login()
