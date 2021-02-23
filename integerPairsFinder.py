'''
find all pairs of integers in an array whose sum is equal a given constant
'''

def finder(arr):
    pass

# Here begin test part 

array1 = [1, 2, 3, 100, 3, 6, 7, 8, 9, 10]
array2 = ['a', 9, 10]
array3 = [1, 2, 3, 4, True, 6, 7, 8, 'b', 0]
array4 = [8, 3.1, 4, 5.1, 11, 5, 8, 8, 4]
array5 = [8, -1.1, 4, -12, 11, 5, 8, 8, 4]
array6 = ['a', False, [0, 1]]

print("%s\t\t\t\tMin: 1, Max: 100" % finder(array1))
print("%s\t\t\t\t\tMin: 9, Max: 10" % finder(array2))
print("%s\t\t\t\t\tMin: 0, Max: 8" % finder(array3))
print("%s\t\t\t\tMin: 3.1, Max: 11" % finder(array4))
print("%s\t\t\t\tMin: -12, Max: 11" % finder(array5))
print("%s\t\t\t\tNot a number array !" % finder(array6))
