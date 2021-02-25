'''
calculate the number of vowels and consonants in a string
'''

def finder(chain):
    if isinstance(chain, str):
        charList = []
        # have to make chain case non-sentitive
        for char in chain.lower():
            if char.isalpha():
                charList.append(char)
        # following line could cause issues if other accented consonants as in spanish ñ
        consList ='bcdfghjklmnñpqrsßtvwxz'
        vowels = []; consonants = []
        for letter in charList:
            if letter in consList:
                consonants.append(letter)
            else:
                vowels.append(letter)
        shortAnswer = "%s\n\tVows: %s - Cons: %s" % (chain, len(vowels), len(consonants))
        if len(charList) != len(chain):
            return "%s - Others: %s" % (shortAnswer, (len(chain) - len(charList)))
        return shortAnswer
    return "%s\n\tis not a string input !" % chain

# Here begin test part 

chain1 = 'ßaùâñaó'
chain2 = 'Nabuchodonosor'
chain3 = True
chain4 = 'part_1'

print("%s\t\t\t\tVows: 5 - Cons: 2" % finder(chain1))
print("%s\t\t\t\tVows: 6 - Cons: 8" % finder(chain2))
print("%s\t\t\t\tis not a string input !" % finder(chain3))
print("%s\t\t\tVows: 1 - Cons: 3 - Others: 2" % finder(chain4))
