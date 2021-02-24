'''
find all pairs of integers in an array whose sum is equal a given constant
'''

def finder(constant, arr):
    if isinstance(constant, int):
        pairs = []
        for i in arr:
            arrTemp = arr[1:]
            for j in arrTemp:
                if i+j == constant:
                    if i <= j:
                        integersPair = "%s+%s" % (i, j)
                    else:
                        integersPair = "%s+%s" % (j, i)
                    pairs.append(integersPair)
            arr = arr[1:]
        if len(pairs) == 0:
            return "No Pairs at all !"
        return ", ".join(list(set(pairs)))
    return "Please enter a number !"

# Here begin test part 

arr = [1, 2, 4, 100, 4, 5, 6, 7.1, 8, 9, 0.9, 0, 2]

print("%s\t\t\t\t\t\tPairs are : 1+2" % finder(3, arr))
print("%s\t\t\t\tPairs are : 2+6, 4+4, 0.9+7.1, 0+8" % finder(8, arr))
print("%s\t\t\t\tNo Pairs at all !" % finder(103, arr))
print("%s\t\t\t\tPlease enter a number !" % finder('a', arr))
print("%s\t\t\t\t\t\tPairs are : 0+1" % finder(True, arr))
