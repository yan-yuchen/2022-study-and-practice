# 求pi的近似值，利用sin(pi)=0
import numpy as np
from numpy import sin
from numpy import log2
import matplotlib.pyplot as plt

a = 3.14
b = 3.15
eps = 10e-10
res = []


def f(x):
    return sin(x)


n = int(log2((b-a)/eps))

for i in range(n):
    m = (a+b)/2
    if f(m)*f(a) > 0:
        a = m
    else:
        b = m
    res.append(m)

plt.plot(range(len(res)), res)
plt.xlabel('number of iterations')
plt.ylabel('root')
plt.show()
