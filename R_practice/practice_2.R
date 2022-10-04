value1 <- c(
    20.51, 25.56, 20.78, 37.27, 36.26, 25.97, 24.62
)

value2 <- c(
    32.56, 26.66, 25.64, 33.00, 34.87, 31.03
)

# 正态性检验
print(ks.test(value1, "pnorm", mean(value1), sd(value1)))
print(ks.test(value2, "pnorm", mean(value2), sd(value2)))

# 单个正态总体均值的假设检验，或单个正态总体均值的区间估计
print(t.test(value1, alternative = "two.sided", mu = 10.5))
print(t.test(value2, alternative = "two.sided", mu = 10.5))

# 单个正太总体方差的区间估计
var.conf.int <- function(x2, mu = Inf, alpha) {
    n <- length(x2)
    if (mu < Inf) {
        s2 <- sum((x2 - mu)^2) / n
        df <- n
    } else {
        s2 <- var(x2)
        df <- n - 1
    }
    c(df * s2 / qchisq(1 - alpha / 2, df), df * s2 / qchisq(alpha / 2, df))
}
# 输出置信区间
print(var.conf.int(value1, mu = Inf, alpha = 0.05))
print(var.conf.int(value2, mu = Inf, alpha = 0.05))

# 两总体方差已知，求均值差的置信区间
# z.test(x,y)

# 两总体方差未知但相等，或未知且不等，求均值差的置信区间
print(t.test(value1, value2))

# 两总体方差比的置信区间
print(var.test(value1, value2))
