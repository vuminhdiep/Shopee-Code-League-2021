set1 = [1,2,3,4,0,-5,-9]
set2 = [56,78,0,1,99,-99]
def minMaxSearch(arr):
    minNum = arr[0]
    maxNum = arr[0]
    for i in range(len(arr)):
        if arr[i] < minNum:
            minNum = arr[i]
        if arr[i] > maxNum:
            maxNum = arr[i]

    print('Min:', minNum, ' Max:', maxNum)

minMaxSearch(set1)
minMaxSearch(set2)
