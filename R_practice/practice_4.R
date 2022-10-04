# 查看数据
library("ggplot2") # 加载ggplot 自带的数据集diamonds
data("diamonds")
set.seed(3000) # 种子3000
mydata <- diamonds[sample(nrow(diamonds), 1000), ]
g <- ggplot(mydata, aes(x = carat, y = price))
g <- g + geom_point(colour = "pink", alpha = 0.5)
g <- g + geom_smooth(colour = "blue", method = lm, alpha = .5)
plot(g)

# 回归分析
sol <- lm(data = mydata, price ~ carat)
print(summary(sol))

# 点预测& 区间预测
new <- data.frame(carat = 3.0) # 克拉数为3
pred <- predict(sol, new, interval = "prediction", level = 0.95)
print(pred)

# 绘制散点图以及回归曲线
plot(mydata$carat, mydata$price, xlab = "carat", ylab = "price")
abline(sol)
