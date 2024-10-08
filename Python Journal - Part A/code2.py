"""
 Write a program to create new list 'b' which contains only initial 
 letters lrom givcn list
 A=['Pune','Mumbai','Dethi','Nagpur']
"""

A = ['Pune' , 'Mumbai', 'Dethi' , 'Nagpur']
b = [ city[0] for city in A ]
print(b)
