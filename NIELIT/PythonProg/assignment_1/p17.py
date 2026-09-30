n1=int(input("Enter first number "))
n2=int(input("Enter second number "))
i=1
gcd=1
j=0
if(n1<n2):
    s=n1
else:
    s=n2
while(i<=s/2):
    j=j+1
    if(n1%2==0 and n2%1==0):
        gcd=1
    i=i+1
print(i)
print(j)
print("GCD= ",gcd)