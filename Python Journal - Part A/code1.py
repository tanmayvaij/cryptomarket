""" 
write a python program for the following -
    i.   create list of fruits
    ii.  add new fruit in list
    iii. sort the list
    iv.  delete last fruit name from list
"""

fruits = [ "orange", "banana", "apple" ]
print(fruits)

fruits.append("mango")
print(fruits)

fruits.sort()
print(fruits)

fruits.pop()
print(fruits)
