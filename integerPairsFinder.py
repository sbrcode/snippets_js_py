'''
find all pairs of integers in an array whose sum is equal a given constant
'''

arr = [1, 2, 4, 100, 4, 5, 6, 7.1, 8, 9, 0.9, 0]

def finder(arr):
    pass

# Here begin test part 

const1 = 3
const2 = 8
const3 = 103

print("%s\t\t\t\t\tPairs are : 1 & 2" % finder(const1))
print("%s\t\t\t\t\tPairs are : 2 & 6, 4 & 4, 8 & 0" % finder(const2))
print("%s\t\t\t\t\tNo Pairs at all !" % finder(const3))
