// write a c program to calculate the area of a circle
#include<stdio.h>
#define PI 3.14
int main(){
    float area, radius;
    printf("Enter the radius of the circle: ");
    scanf("%f",&radius);
    area=PI*radius*radius;
    printf("Area of circle = %f",area);
    return 0;
}