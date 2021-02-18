'''
determine min and max values of an integer array
'''

def finder(arr):
    pass


# Here begin test part 

array1 = [1, 2, 3, 100, 3, 6, 7, 8, 9, 10]
array2 = ['a', 9, 10]
array3 = [1, 2, 3, 4, True, 6, 7, 8, 'b', 0]
array4 = [8, 3.1, 4, 5.1, 11, 5, 8, 8, 4]

print(finder(array1), "\t\t\t\tMin: 3, Max: 100")
print(finder(array2), "\t\t\t\tMin: 9, Max: 10")
print(finder(array3), "\t\t\t\tMin: 1, Max: 8")
print(finder(array4), "\t\t\t\tMin: 3.1, Max: 11")