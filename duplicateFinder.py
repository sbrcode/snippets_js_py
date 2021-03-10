"""
find all duplicate values of an array
"""

def finder(arr):
    duplicates = [x for n, x in enumerate(arr) if x in arr[:n]]
    if len(duplicates) == 0:
        return "No duplicate"
    return duplicates
    # return ''.join(duplicates)

# Here begin test part 

array1 = [1, 2, 3, 5, 6, True, 7, 8, 9, 10, 3, True]
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array3 = [1, 4, 3, 'a', 4, 5, -6, 7, 8, 10, 'a', 10, -6]
array4 = [1, 8, 3, 8, 5.1, 10, 5.1, 8, 8, 4]
array5 = [{"a": 1}, {"b": 2}, {"b": 1}, {"a": 1}, {"b": 2}]

print("%s \t\t\t\t|| 3,True" % finder(array1))
print("%s \t\t\t\t|| No duplicate" % finder(array2))
print("%s \t\t\t\t|| 4,a,10,-6" % finder(array3))
print("%s \t\t\t\t|| 8,5.1,8,8" % finder(array4))
print("%s \t\t\t\t|| {'a': 1},{'b': 2}" % finder(array5))
