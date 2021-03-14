import math

N = int(input('N = '))
coords = []

for _ in range(N):
    x, y = [int(input('x = ')), int(input('y = '))]
    coords.append((x, y))

Xg, Yg = [int(input('Xg = ')), int(input('Yg = '))]
Xa, Ya = [int(input('Xa = ')), int(input('Ya = '))]

while True:
    Q = int(input('Q = '))
    if Q >= 1 and Q <= 105:
        break

for _ in range(Q):
    count = 0
    Rg, Ra = [int(input('Rg = ')), int(input('Ra = '))]
    for x, y in coords:
        dis_g = math.sqrt((x - Xg) ** 2 + (y - Yg) ** 2)
        dis_a = math.sqrt((x - Xa) ** 2 + (y - Ya) ** 2)
        if dis_g > Rg and dis_a > Ra or dis_g == Rg and dis_a == Ra or dis_g < Rg and dis_a == Ra \
                or dis_g < Rg and dis_a == Ra or dis_g == Rg and dis_a < Ra or dis_g < Rg and dis_a < Ra:
            count += 1
    print(count)
