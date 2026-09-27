# Write a program of calculator using elif 
while(True):
    n1=int(input("Enter first number "))
    n2=int(input("Enter second number "))
    op=input("Enter operator ")
    if(op=="+"):
        print(n1+n2)
        continue
    elif(op=="-"):
         print(n1-n2)
         continue
    elif(op=="*"):
        print(n1*n2)
        continue
    elif(op=="/"):
        print(n1/n2)
        continue
    elif(op=="%"):
        print(n1%n2)
        continue
    else:
        print("inviled operator")
    