'''
determine the first character of a string that is unique in the
chain
'''

def finder(chain):
    if isinstance(chain, str):
        chain = chain.casefold()
        for char in chain:
            count = len(chain.split(char)) - 1
            if count == 1:
                if char != ' ':
                    return char
        return "No unique char !"
    return "Not a String !"


# Here begin test part 

chain1 = 'du beurre de baratte'
chain2 = 'Laval avale et alors?'
chain3 = '1 Valvule'
chain4 = True
chain5 = ['agua', 'gwada']

print("%s\t\t\tAnswer: No unique char !" % finder(chain1))
print("%s\t\t\t\t\tAnswer: t" % finder(chain2))
print("%s\t\t\t\t\tAnswer: 1" % finder(chain3))
print("%s\t\t\t\tMot a String !" % finder(chain4))
print("%s\t\t\t\tMot a String !" % finder(chain5))
