// write a c program to swap two number
#include<stdio.h>
int main()
{
	int a=10,b=20;
	printf("before swaping a=%d,b=%d \n",a,b);
	a=a+b;
	b=a-b;
	a=a-b;
	printf("after swaping a=%d,b=%d",a,b);
	return 0;
}