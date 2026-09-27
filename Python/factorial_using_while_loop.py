# write a python program to print factorial
n=int(input("Enter a number :"))
i=0
fact=1
while i<n:
    fact=fact*n
    n=n-1
print(fact)