'''
from an array, give an array containing the same elements, but in reverse order
'''

def finder(arr):
    pass

# Here begin test part 

array1 = 'iamastring'
array2 = [1, 'retro', 2, True, 5.1, 'game']
array3 = [[1,2,3,4,5],[6,7,8,9]]
array4 = [{'a': 100}, {'b': 10}, {'c': 1}]

print("---- 1st method ----")
print("%s\t\t\t||\ttgnirtsamai" % finder(array1))
print("%s\t\t\t||\t['game',5.1,true,2,'retro',1]" % finder(array2))
print("%s\t\t\t||\t[[6,7,8,9],[1,2,3,4,5]]" % finder(array3))
print("%s\t\t\t||\t[{'c': 1},{'b': 10},{'a': 100}]" % finder(array4))
