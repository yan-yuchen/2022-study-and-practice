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

# 均值
mean.value <- mean(value)
print("样本均值：")
print(mean.value)

# 顺序统计量
sort.value <- sort(value, decreasing = FALSE)
print("顺序统计量:")
print(sort.value)

# 样本中位数
median.value <- median(value)
print("样本中位数:")
print(median.value)

# 样本方差
var.value <- var(value)
print("样本方差:")
print(var.value)

# 样本标准差
sd.value <- sd(value)
print("样本标准差:")
print(sd.value)

# 直方图
hist(value, freq = FALSE)

# 核密度估计曲线
lines(density(value), col = "green")

# 正态分布密度函数曲线
x <- seq(from = -100, to = 100, by = 0.01)
lines(x, dnorm(x, mean(value), sd(value)), col = "red")

# 箱型图
boxplot(value)
