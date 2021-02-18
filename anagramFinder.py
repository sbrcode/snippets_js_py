'''
determine if 2 strings are anagrams 
'''

def finder(val1, val2):
    if isinstance(val1, str) and isinstance(val2, str):
        return True
    return False


# Here begin test part 

value11 = "nacre"; value12 = "rance"
value21 = "tenancières"; value22 = "cannetières"
value31 = "vaginales"; value32 = "Galvanise"
value41 = "cador"; value42 = "crade"
value51 = "true"; value52 = True

print(finder(value11, value12), "\t\t\t\tAnagram? true")
print(finder(value21, value22), "\t\t\t\tAnagram? true")
print(finder(value31, value32), "\t\t\t\tAnagram? true")
print(finder(value41, value42), "\t\t\t\tAnagram? false")
print(finder(value51, value52), "\t\t\t\tAnagram? false")