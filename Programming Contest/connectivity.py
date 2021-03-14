history = []
nums_component = []
switches = {}
N = int(input('N = '))
Q = int(input('Q = '))
network = [[0 for _ in range(N)] for _ in range(N)]
components = [set(i) for i in range(N)]

for i in range(N):
    switches[i + 1] = []

for _ in range(Q):
    scenario = input().split()
    if scenario[0] == 'PUSH':
        switch1 = int(scenario[1])
        switch2 = int(scenario[2])
        switches[switch1].append(switch2)
        switches[switch2].append(switch1)
        history.append((switch1, switch2))
        if len(nums_component) == 0:
            nums_component.append(N - 1)
        elif network[switch1][switch2] > 0:
            nums_component.append(nums_component[-1])
        else:
            nums_component.append(nums_component[-1])
        print(nums_component[-1])
        network[switch1][switch2] += 1
        network[switch2][switch1] += 1
    elif scenario[0] == 'POP':
        last_added = history.pop()
        network[last_added[0]][last_added[1]] -= 1
        network[last_added[1]][last_added[0]] -= 1
        nums_component.pop()
        print(nums_component[-1])