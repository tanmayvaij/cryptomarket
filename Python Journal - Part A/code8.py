"""
Write a program to find maximum of 3 numbers using ternary
operator
"""

a = int(input("Enter num 1:- "))
b = int(input("Enter num 2:- "))
c = int(input("Enter num 3:- "))

max_num =  a if (a > b) and (a > c) else b if b > c else c
print(max_num)
