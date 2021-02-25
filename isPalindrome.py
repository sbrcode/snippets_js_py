'''
determine if a given string is a palindrome
'''

def finder(chain):
    if isinstance(chain, str):
        chainMod = []
        for char in chain.lower():
            if char.isalpha():
                chainMod.append(char)
        if chainMod == chainMod[::-1]:
            return "'%s'\tis a palindrome." % chain
        return "'%s'\tis NOT a palindrome." % chain
    return "%s\tis not a string input !" % chain

def finder_2(chain):
    if isinstance(chain, str):
        # Run loop from 0 to len/2 
        for i in range(0, int(len(chain)/2)): 
            if chain[i] == chain[len(chain)-i-1]:
                return "'%s'\tis a palindrome." % chain
        return "'%s'\tis NOT a palindrome." % chain
    return "%s\tis not a string input !" % chain

# Here begin test part 

chain1 = 'radars'
chain2 = '156651'
chain3 = 12321
chain4 = 'semâmes'
chain5 = "A man, a plan, a canal, Panama"

print("\n----1st function---")
print("%s\t\t\t\tis NOT a palindrome" % finder(chain1))
print("%s\t\t\t\tis Palindrome !" % finder(chain2))
print("%s\t\t\t\t\tis NOT a string input" % finder(chain3))
print("%s\t\t\t\tis Palindrome !" % finder(chain4))
print("%s\tis Palindrome !" % finder(chain5))

print("\n----2nd function---")
print("%s\t\t\t\tis NOT a palindrome" % finder_2(chain1))
print("%s\t\t\t\tis Palindrome !" % finder_2(chain2))
print("%s\t\t\t\t\tis NOT a string input" % finder_2(chain3))
print("%s\t\t\t\tis Palindrome !" % finder_2(chain4))
print("%s\tis Palindrome !" % finder_2(chain5))