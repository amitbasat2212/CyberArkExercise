import imp


import pytest

def anagram(str1, str2):
    letters_str1 = set([*str1]);
    letters_str2 = set([*str2]);
    if(letters_str1.issubset(letters_str2)):       
        return True;
    
    return False

@pytest.mark.parametrize("str1,str2", [("amit","maitreo"),("bobob","bbbbnnnttro")])  
def test_anagram(str1,str2):
  assert anagram(str1,str2)==True;  

@pytest.mark.parametrize("str1,str2", [("amit","rona"),("momo","mm"),("momo","")])  
def test_not_anagram(str1,str2):
  assert anagram(str1,str2)==False;           

