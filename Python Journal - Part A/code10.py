"""
Write a program to add values for the following keys into
dictionary using for loop -
key = ['name','age','city','is student']
"""

my_dict = {}
key = ['name','age','city','is student']
for key in key:
    val = input(f"{key} : ")
    my_dict[key] = val

print(my_dict)
