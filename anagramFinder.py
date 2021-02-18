'''
determine if 2 strings are anagrams 
'''

def finder(val1, val2):
    if isinstance(val1, str) and isinstance(val2, str):
        char1 = list(val1.casefold())
        char2 = list(val2.casefold())
        missingItemsArray = []
        for i in char1:
            if i not in char2:
                missingItemsArray.append(i)
        if missingItemsArray == [] and len(char1) == len(char2):
            return val1, " and ", val2, " are anagrams !"
    return "no anagram."

def finder_2(val1, val2):
    if isinstance(val1, str) and isinstance(val2, str):
        tosort1 = []
        tosort2 = []
        char1 = val1.casefold()
        char2 = val2.casefold()
        for char in char1:
            tosort1.append(char)
        for char in char2:
            tosort2.append(char)
        sorted1 = ''.join(sorted(tosort1))
        sorted2 = ''.join(sorted(tosort2))
        if sorted1 == sorted2:
            return val1, " and ", val2, " are anagrams !"
    return "no anagram."

# Here begin test part 

value11 = "nacre"; value12 = "rance"
value21 = "tenancières"; value22 = "cannetières"
value31 = "vaginales"; value32 = "Galvanise"
value41 = "cador"; value42 = "crade"
value51 = "true"; value52 = True

print("---- 1st method ----")
print(finder(value11, value12), "\t\t\t\tAnagram? true")
print(finder(value21, value22), "\t\tAnagram? true")
print(finder(value31, value32), "\t\t\tAnagram? true")
print(finder(value41, value42), "\t\t\t\t\t\t\t\tAnagram? false")
print(finder(value51, value52), "\t\t\t\t\t\t\t\tAnagram? false")

print("---- 2nd method ----")
print(finder_2(value11, value12), "\t\t\t\tAnagram? true")
print(finder_2(value21, value22), "\t\tAnagram? true")
print(finder_2(value31, value32), "\t\t\tAnagram? true")
print(finder_2(value41, value42), "\t\t\t\t\t\t\t\tAnagram? false")
print(finder_2(value51, value52), "\t\t\t\t\t\t\t\tAnagram? false")