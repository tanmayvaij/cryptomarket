"""
Write a program to access each character of a string in forward and backward using while loop
"""

string = "tanmayvaij"
strlen = len(string)

for i in range(strlen):
    print(string[i], end=" ")

print()

for i in range(strlen-1, -1, -1):
    print(string[i], end=" ")
    