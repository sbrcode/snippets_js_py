'''
determine min and max values of a number array
'''

def finder(arr):
    arrNum = []
    for i in arr:
        if isinstance(i, int) or isinstance(i, float):
            if not isinstance(i, bool):
                arrNum.append(i)
    if len(arrNum) == 0:
        return "Not a number array !"
    return "min: %s, max: %s, ave: %s" % (min(arrNum), max(arrNum), sum(arrNum)/len(arrNum))

# Here begin test part 

array1 = [1, 2, 3, 100, 3, 6, 7, 8, 9, 10]
array2 = ['a', 9, 10]
array3 = [1, 2, 3, 4, True, 6, 7, 8, 'b', 0]
array4 = [8, 3.1, 4, 5.1, 11, 5, 8, 8, 4]
array5 = [8, -1.1, 4, -12, 11, 5, 8, 8, 4]
array6 = ['a', False, [0, 1]]

print("%s\t\t\t\tMin: 1, Max: 100, Ave: 14.9" % finder(array1))
print("%s\t\t\t\t\tMin: 9, Max: 10, Ave: 9.5" % finder(array2))
print("%s\t\t\t\t\tMin: 0, Max: 8, Ave: 3.875" % finder(array3))
print("%s\t\t\t\tMin: 3.1, Max: 11, Ave: 6.2444..." % finder(array4))
print("%s\t\t\t\tMin: -12, Max: 11, Ave: 3.8777..." % finder(array5))
print("%s\t\t\t\tNot a number array !" % finder(array6))
