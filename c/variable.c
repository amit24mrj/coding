#include<stdio.h>
int main(){
    int age =20;
    float marks=85.5f;
    char grade ='A';
    double value= 123.456789;

    printf("%d\n",age);
    printf("%.1f\n", marks);
    printf("%c",grade);
    printf("%.6f",value);
    return 0;
}