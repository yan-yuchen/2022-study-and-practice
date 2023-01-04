# �鿴����
library("ggplot2") # ����ggplot �Դ������ݼ�diamonds
data("diamonds")
set.seed(3000) # ����3000
mydata <- diamonds[sample(nrow(diamonds), 1000), ]
g <- ggplot(mydata, aes(x = carat, y = price))
g <- g + geom_point(colour = "pink", alpha = 0.5)
g <- g + geom_smooth(colour = "blue", method = lm, alpha = .5)
plot(g)

# �ع����
sol <- lm(data = mydata, price ~ carat)
print(summary(sol))

# ��Ԥ��& ����Ԥ��
new <- data.frame(carat = 3.0) # ������Ϊ3
pred <- predict(sol, new, interval = "prediction", level = 0.95)
print(pred)

# ����ɢ��ͼ�Լ��ع�����
plot(mydata$carat, mydata$price, xlab = "carat", ylab = "price")
abline(sol)