'''
calculate the number of vowels and consonants in a string
'''

def finder(chain):
    pass

# Here begin test part 

chain1 = 'aâaùñóß'
chain2 = 'Nabuchodonosor'
chain3 = True
chain4 = 'part_1'

print("%s\t\t\t\t\t%s\t\tVows: 5 - Cons: 2" % (finder(chain1), chain1))
print("%s\t\t\t\t\t%s\tVows: 6 - Cons: 8" % (finder(chain2), chain2))
print("%s\t\t\t\t\t%s\t\tis not a string input !" % (finder(chain3), chain3))
print("%s\t\t\t\t\t%s\t\tVows: 1 - Cons: 3 - Others: 2" % (finder(chain4), chain4))
