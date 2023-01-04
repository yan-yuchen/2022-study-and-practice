value <- c(
    -12,
    18,
    -13,
    -4,
    63,
    32,
    -2,
    -56,
    79,
    -36,
    -44,
    -38,
    -19,
    66,
    -41,
    -13,
    24,
    7,
    37,
    -34,
    -27,
    6,
    -14,
    59,
    -2,
    -55,
    -25,
    30,
    42,
    70,
    70,
    -51,
    22,
    39,
    77,
    27,
    -14,
    29,
    -38,
    -40,
    -19,
    70,
    59,
    41,
    -55,
    -41,
    65,
    -47,
    31,
    36
)

# ��ֵ
mean.value <- mean(value)
print("������ֵ��")
print(mean.value)

# ˳��ͳ����
sort.value <- sort(value, decreasing = FALSE)
print("˳��ͳ����:")
print(sort.value)

# ������λ��
median.value <- median(value)
print("������λ��:")
print(median.value)

# ��������
var.value <- var(value)
print("��������:")
print(var.value)

# ������׼��
sd.value <- sd(value)
print("������׼��:")
print(sd.value)

# ֱ��ͼ
hist(value, freq = FALSE)

# ���ܶȹ�������
lines(density(value), col = "green")

# ��̬�ֲ��ܶȺ�������
x <- seq(from = -100, to = 100, by = 0.01)
lines(x, dnorm(x, mean(value), sd(value)), col = "red")

# ����ͼ
boxplot(value)