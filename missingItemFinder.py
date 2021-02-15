"""
from an array of 99 distinct integers from 1 to 100,
find what is missing
"""
globalArray = list(range(1,101))

def finder(arr):
    # Convert lists to sets
    first_set = set(globalArray)
    sec_set = set(arr)
    # Get the differences between two sets
    differences = (first_set - sec_set).union(sec_set - first_set)
    if differences == set():
        return "Arrays are identical !"
    else:
        return differences

def finder_2(arr):
    pass



# Here begin test part 

array1 = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ]

array2 = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ]

array3 = [
    1,  2,  3,   4,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99
 ]

print(finder(array1), "\t[...Identical arrays]")
print(finder(array2), "\t\t\t[...12 is missing]")
print(finder(array3), "\t[...5, 43, 68 and 100 are missing]")

# print(finder_2(array1), "\t[...Identical arrays]")
# print(finder_2(array2), "\t\t\t[...12 is missing]")
# print(finder_2(array3), "\t[...5, 43, 68 and 100 are missing]")