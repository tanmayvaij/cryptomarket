"""
Write a program to create list for basic salary of employee and
calculate the gross salary of an employee for following allowance and deduction

D A=25%, HRA=15%, PF=12%, TA=7.50%
Net Pay=basic+DA+HRA+TA
Gross Pay=Net Pay-PF
"""

def calculate_gross_salary(salary):
    net_pay = salary *(1 + (0.25 + 0.15 + 0.075 ))
    return net_pay - salary*0.12

salaries = [ 40000, 50000, 60000, 70000 ]

for salary in salaries:
    print(calculate_gross_salary(salary))
    