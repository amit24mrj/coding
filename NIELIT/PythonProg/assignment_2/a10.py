# python program to calculate gross salary where gross salary=basic+HRA+DA in this HRA is 16% of DA 12% of Basic
basic_salary=float(input("Enter the basic salary "))
hra=(basic_salary*16)/100
da=(basic_salary*12)/100
gross_salary=basic_salary+hra+da
print("Gross salary = ",gross_salary)