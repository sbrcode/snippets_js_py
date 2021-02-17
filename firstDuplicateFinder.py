"""
From an array of integers, find the first duplicate number in the painting
"""

def finder(arr):
    arrCopy = [arr[0]]
    for index in range(len(arr)-1):
        for value in arrCopy:
            comparedValue = arr[len(arrCopy)]
            if value == comparedValue:
                return value
        arrCopy.append(comparedValue)
    return "no duplicate"


# Here begin test part 

array1 = [1, 2, 3, 5, 3, 6, 7, 8, 9, 10]
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10]
array4 = [1, 8, 3, 4, 5, 10, 5, 8, 8, 4]

print(finder(array1), "\t\t\t\tAnswer is: 3")
print(finder(array2), "\t\t\tAnswer is: no duplicate")
print(finder(array3), "\t\t\t\tAnswer is: 10")
print(finder(array4), "\t\t\t\tAnswer is: 5")