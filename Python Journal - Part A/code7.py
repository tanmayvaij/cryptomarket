"""
Write a program to print sum of positive integers when user enter
negative value break the loop (while)
"""
s = 0
while True:
    n = int(input("Enter number:- "))
    if n < 0: break
    s += n

print(s)
