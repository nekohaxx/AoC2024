d = """...
...
..."""
l = list(map(lambda x:list(map(int, x.split(" "))),d.split("\n")))
safe = 0
for y in l:
    ov = []
    for i in range(len(y)):
        n = y.copy()
        del n[i]
        ov.append(n)
    v = [y] + ov
    for x in v:
        r = False
        if x[0] == x[1]:
            continue
        elif x[0] < x[1]:
            for i in range(len(x) - 2):
                if x[i + 1] >= x[i + 2]:
                    r = True
                    break
        else:
            for i in range(len(x) - 1):
                if x[i] <= x[i + 1]:
                    r = True
                    break
        for i in range(len(x) - 1):
            if abs(x[i] - x[i+1]) > 3:
                r = True
                break
        if not r:
            safe += 1
            break

print(safe)
