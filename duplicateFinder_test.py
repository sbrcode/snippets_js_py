"""
find all duplicate values of an array
"""

def finder(arr):
    # first enumerate to avoid cases with False == 0 and True == 1
    for k, y in enumerate(arr):
        if isinstance(y, bool):
            if y == True:
                arr[k] = "True"
            elif y == False:
                arr[k] = "False"
    # init a list of duplicates
    duplicates = []
    for n, x in enumerate(arr):
        # items are looked for in the list of previous items
        # if an item is found in the existant list of duplicates, it is deleted
        if x in arr[:n] and x not in duplicates:
            duplicates.append(x)
    if len(duplicates) == 0:
        return "No duplicate"
    return duplicates

# Here begin test part 

array1 = [1, 2, 3, 5, 6, True, 7, 8, 9, 10, 3, True]
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array3 = [1, 4, 3, 'a', 4, 5, -6, 7, 8, 10, 'a', 10, -6]
array4 = [1, 8, 3, 8, 5.1, 10, 5.1, 8, 8, 4]
array5 = [{"a": 1}, {"b": 2}, {"b": 1}, {"a": 1}, {"b": 2}, {"b": 2}]

class TestFinder:
    def test_one(self):
        assert finder(array1) == [3, 'True']
    def test_two(self):
        assert finder(array2) == "No duplicate"
    def test_three(self):
        assert finder(array3) == [4,'a',10,-6]
    def test_four(self):
        assert finder(array4) == [8,5.1]
    def test_five(self):
        assert finder(array5) == [{'a': 1},{"b": 2}]
