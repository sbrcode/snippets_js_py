'''
calculate the largest sum contiguous and limit indices sub array
'''
from sys import maxsize

def largestSumContiguousAndLimitsSubArray(ts):
    if len(ts) != 0:
        max_so_far = -maxsize - 1
        max_ending_here = 0
        start = 0
        end = 0
        s = 0
        for i in range(0,len(ts)):
            max_ending_here += ts[i]
            if max_so_far < max_ending_here:
                max_so_far = max_ending_here
                start = s
                end = i
            if max_ending_here < 0:
                max_ending_here = 0
                s = i+1
        return "Max cont. sum: %d"%(max_so_far), "Start: %d"%(start), "End: %d"%(end)
    return "Empty Array"

# Here begin test part

chain1 = [7, 5, 9, 2, 4]
chain2 = [7, 5, -9, -3, 4]
chain3 = [8, -9, 5, 1, 4]
chain4 = []
chain5 = [1, 0, 10, -10]

print("%s\t%s\t%s\t" % largestSumContiguousAndLimitsSubArray(chain1))
print("%s\t%s\t%s\t" % largestSumContiguousAndLimitsSubArray(chain2))
print("%s\t%s\t%s\t" % largestSumContiguousAndLimitsSubArray(chain3))
print("%s\t" % largestSumContiguousAndLimitsSubArray(chain4))
print("%s\t%s\t%s\t" % largestSumContiguousAndLimitsSubArray(chain5))
