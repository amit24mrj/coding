// write a c program to perform a mathematical operation
#include<stdio.h>
int main(){
int a,b;
    a=40;
    b=20;
    int sum =a+b;
    printf("Sum =%d\n ",sum);
    int sub =a-b;
    printf("Subtraction =%d\n ",sub);
    int mul =a*b;
    printf("Multiplication =%d\n ",mul);
    int div =a/b;
    printf("Division =%d\n ",div);
    int mod =a%b;
    printf("Modulus =%d\n ",mod);
    int pow =1;
    for(int i=0;i<b;i++){
        pow=pow*a;
    }
    printf("Power =%d\n ",pow);
    int fact =1;
    for(int i=1;i<=a;i++){
        fact=fact*i;
    }
    printf("Factorial =%d\n ",fact);
    int sqrt =1;
    for(int i=1;i<=a;i++){
        if(i*i==a){
            sqrt=i;
            break;
        }
    }
    printf("Square Root =%d\n ",sqrt);
    return 0;

}