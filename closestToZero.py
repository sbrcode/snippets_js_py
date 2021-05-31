'''
calculate the integer closest to Zero
'''

def computeClosestToZero(ts):
    if len(ts) > 0 and len(ts) <= 10000:
        ts_abs = []
        for i in ts:
            ts_abs.append(abs(i))
        res = min(ts_abs)
        if res in ts:
            return res
        else:
            return -res
    return 0

# Here begin test part

chain1 = [7, 5, 9, 2, 4]
chain2 = [7, 5, -9, -3, 4]
chain3 = [9, 5, 1, -9, -1, 4]
chain4 = []
chain5 = [1, 0, 10, -10]

print("%s\t" % computeClosestToZero(chain1))
print("%s\t" % computeClosestToZero(chain2))
print("%s\t" % computeClosestToZero(chain3))
print("%s\t" % computeClosestToZero(chain4))
print("%s\t" % computeClosestToZero(chain5))
