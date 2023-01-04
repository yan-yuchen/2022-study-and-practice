input.v <- c(110, 105, 85, 70, 112, 108, 95, 90, 99, 110, 88, 75, 95, 95, 78, 82, 100, 112, 98, 80)
# data���������Ϊ�����Ԫ�أ�����Ϊ�գ�nrow����������Ǿ����������Ĭ��Ϊ1��ncol����������Ǿ����������Ĭ��Ϊ1��
# byrow�������ƾ���Ԫ�ص����з�ʽ��TRUE��ʾ�������У�FALSE��ʾ�������У�Ĭ��ΪFALSE��dimnames���������������������������Բ����룬ϵͳĬ��ΪNULL��
input.m <- matrix(data = input.v, nrow = 5, ncol = 4, byrow = T)
input_dataframe <- data.frame(x = input.v, A = factor(rep(c("f1", "f2", "f3", "f4"), c(5, 5, 5, 5))))

# ��̬�Լ���
for (i in c(1:4)) {
    print(shapiro.test(input.m[, i]))
}

# �������Լ���
print(bartlett.test(x ~ A, data = input_dataframe))

# �������
scores.aov <- aov(x ~ A, data = input_dataframe)
print(summary(scores.aov))