# Python program to exchange the values of two number without using a temporary variable.
n1=int(input("Enter first number "))
n2=int(input("Enter second number"))
print ("Origenal value ",n1,"and ",n2)
n1,n2=n2,n1
print("After exchange the value ",n1," and ",n2)
