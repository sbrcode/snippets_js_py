'''
determine if a string contains only digits
'''

def finder(chain):
    try:
        if float(chain):
            return "%s \tContains Only Digits !" % chain
    except ValueError:
        return "%s \tnot only digits.." % chain
    except TypeError:
        return "%s \tis not a string input." % chain

# Here begin test part 

chain1 = '122485'
chain2 = '3.112'
chain3 = '1 23'
chain4 = '1A'
chain5 = [12, 1]

print("%s \t\t\t\t\tAnswer: Contains Only Digits !" % finder(chain1))
print("%s \t\t\t\t\tAnswer: Contains Only Digits !" % finder(chain2))
print("%s \t\t\t\t\tAnswer: not only digits.." % finder(chain3))
print("%s \t\t\t\t\tAnswer: not only digits.." % finder(chain4))
print("%s \t\t\t\t\tAnswer: is not a string input." % finder(chain5))
