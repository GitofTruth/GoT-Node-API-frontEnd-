#include <conio.h>
#include <stdio.h>
#define X 5


#if X==5
int VAR1 = X;
#elif X==10
int VAR2 = 6;
#endif

int main()
{
	unsigned char Str[15] = "Hello World! X";
	printf(Str);
	
	int x =5; 
	switch (x)
		{
			case 5:
			printf("yes");
				{
					printf("No");
				}
		}
	getch();
	return 0;
}
