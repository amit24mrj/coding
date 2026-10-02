// write a program to check whether the given three numbers are negative or positive.
#include<stdio.h>
int main(){
    int n1,n2,n3;
    printf("Enter three numbers: \n");
    scanf("%d %d %d",&n1,&n2,&n3);
    if(n1<0){
        printf("%d is a negative number. \n",n1);
    }
    if(n2<0){
        printf("%d is a negative number. \n",n2);
    }
    if(n3<0){
        printf("%d is a negative number. \n",n3);
    }
    if(n1>=0 && n2>=0 && n3>=0){
        printf(" %d, %d and %d  numbers are positive. \n",n1,n2,n3);
    }
    return 0;
}