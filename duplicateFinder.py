"""
find all duplicate values of an array
"""

def finder(arr):
    pass


# Here begin test part 

array1 = [1, 2, 3, 5, 6, 7, 8, 9, 10, 3]
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array3 = [1, 4, 3, 4, 5, 6, 7, 8, 10, 10, 6]
array4 = [1, 8, 3, 8, 5, 10, 5, 8, 8, 4]

print("%s \t\t\t\tAnswer is: 3" % finder(array1))
print("%s \t\t\tAnswer is: no duplicate" % finder(array2))
print("%s \t\t\t\tAnswer is: 4, 6, 10" % finder(array3))
print("%s \t\t\t\tAnswer is: 5, 8" % finder(array4))