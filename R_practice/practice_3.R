input.v <- c(110, 105, 85, 70, 112, 108, 95, 90, 99, 110, 88, 75, 95, 95, 78, 82, 100, 112, 98, 80)
# data参数输入的为矩阵的元素，不能为空；nrow参数输入的是矩阵的行数，默认为1；ncol参数输入的是矩阵的列数，默认为1；
# byrow参数控制矩阵元素的排列方式，TRUE表示按行排列，FALSE表示按列排列，默认为FALSE；dimnames参数输入矩阵的行名和列名，可以不输入，系统默认为NULL。
input.m <- matrix(data = input.v, nrow = 5, ncol = 4, byrow = T)
input_dataframe <- data.frame(x = input.v, A = factor(rep(c("f1", "f2", "f3", "f4"), c(5, 5, 5, 5))))

# 正态性检验
for (i in c(1:4)) {
    print(shapiro.test(input.m[, i]))
}

# 方差齐性检验
print(bartlett.test(x ~ A, data = input_dataframe))

# 方差分析
scores.aov <- aov(x ~ A, data = input_dataframe)
print(summary(scores.aov))
