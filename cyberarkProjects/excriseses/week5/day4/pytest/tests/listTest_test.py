my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8,9,10]]

def check_if_in_list(value):
    return (value in my_list)

def if_upper_case():
    only_string_in_list = [x for x in my_list if type(x) == str]
    all_upper = [up.isupper() for up in only_string_in_list]
    return all(all_upper)


def test_number():
  assert check_if_in_list(3)==False # Should assert if number 3 is in my_list
  assert check_if_in_list(56)==True  # Should assert if number 56 is in my_list
  
def test_str():
  assert check_if_in_list('Love')==True # Should assert if "I", "Love" and "Coding" are in my_list
  assert check_if_in_list('I')==True # Should assert if "I", "Love" and "Coding" are in my_list
  assert check_if_in_list('Coding')==True # Should assert if "I", "Love" and "Coding" are in my_list

def test_upper_str():
  assert if_upper_case()==False # Should assert if all the strings in my_list are in upper case﻿

def test_negative():
  assert check_if_in_list(6)==False # Should assert if number 6 is no﻿t in﻿ my_list - result should be true