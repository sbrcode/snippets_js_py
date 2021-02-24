'''
find all pairs of integers in an array whose sum is equal a given constant
'''

arr = [1, 2, 4, 100, 4, 5, 6, 7.1, 8, 9, 0.9, 0, 2]

def finder(arr):
    pass

# Here begin test part 


print("%s\t\t\t\t\tPairs are : 1+2" % finder(3))
print("%s\t\t\t\t\tPairs are : 2+6, 4+4, 0.9+7.1, 0+8" % finder(8))
print("%s\t\t\t\t\tNo Pairs at all !" % finder(103))
print("%s\t\t\t\t\tPlease enter a number !" % finder('a'))
