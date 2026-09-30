num=[8,5,12,3,10]
n=len(num)
for i in range(n):
    for j in range(i+1,n):
        if(num[i]>num[j]):
            temp=num[i]
            num[i]=num[j]
            num[j]=temp
for i in range(n):
    print(num[i])