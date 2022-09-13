#is palindrom

def isPlaindrom(pali):
    return pali==pali[::-1]


#Reverse Words in a Sentence

def rever_sentece(sentece):
    return " ".join([word[::-1] for word in sentece.split()])


print(rever_sentece("hello world"))


#Swap Two Variables
# def swap(sentece):


#Sum Even Items
def sum_arry(array):
    return sum(array[1::2])


print(sum_arry([1, 2, 1, 3, 1]))


#Duplicate

def duplicate(array):
    return array.copy()+array

print(duplicate([1, 2, 1, 3, 1]))    

#Change Spaces

def change_spaces(str):
    return str.replace(" ","@")



print(change_spaces("You got it" ))


#Number of spaces
def num_spaces(str):
    return str.count(" ")

print(num_spaces("You got it" ))    


#Number of all spaces
def num_spaces(str):
    return str.count(" ")+str.count("\t")+str.count("\n")

print(num_spaces("Here is   a new line")) 


#Largest Lexicographically
def lexicographically(str):
    
    return (sorted(str.split())[len(sorted(str.split()))-1])

print(lexicographically("Imagination is .more important than knowledge.")) 


#Longest Word
def longest_word(words):
    return  len(max(words.split(),key=len));

print(longest_word("If you can't explain it simply you don't understand it well enough.")) 


#Reverse Word Order
def Reverse_Word(words):
    return  " ".join(words.split()[::-1]);

print(Reverse_Word("If you can't explain it simply you don't understand it well enough.")) 

#Exercise Name: Factorial
from functools import reduce
from operator import mul
def Factorial(n):
    return reduce(mul, range(1, n+1))

print(Factorial(6)) 


#Exercise Name: Remove Duplicates
def remove_duplicates(array):
    return list(dict.fromkeys(array))

print(remove_duplicates([1,2,1,3,3,2,2])) 




