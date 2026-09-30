n=int(input("Enter three digit number "))
first_num=n//100
last_num=n%10
if first_num==last_num:
    print("This is palindrome number")
else:
    print("This is not palindrome number")
