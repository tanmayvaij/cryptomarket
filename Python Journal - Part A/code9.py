"""
Write a program to print different vowels present in the word
"Learning python"
"""

vowels = ["a", "e", "i", "o", "u"]
for char in "Learning python":
    if char in vowels: print(char)
    