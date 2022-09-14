# def find_index(items, item):
#   for index, value in enumerate(items):
#     if value == item:
#       return index
#     return -1 

numbers = [11,3,64,17,94]
for i,v in enumerate(numbers, 100):
  print(i, v) 


string_iterator = iter("Python")
print(next(string_iterator))



def reverse(iterable):
  length = len(iterable)
  for i in range(length - 1, -1, -1):
    yield iterable[i]    # For loop to print the reversed string


for item in reverse(["Eric", 1985, ["Dan", "James", "Anna"]] ):
  print(item) 


gen = (x for x in range(20))
print(gen)

#excrice 1 
def my_enumerate(array,size=None):
   length = len(array)  
   if(size==None):
     size=0; 
   print(size)         
   for i in range(0, length):
      yield (size,array[i])
      size+=1;
        


for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 


for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem)  



  #excrice2

def my_accumulate (lis):
    total = 0
    for x in lis:
        total += x
        yield total


for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 


#excrice3
from math import ceil, sqrt
def get_prime_factors_generator(num):    
    if num <= 1: return []
    prime = next((x for x in range(2, ceil(sqrt(num))+1) if num%x == 0),num)
    return [prime] + get_prime_factors_generator(num//prime)    



for x in get_prime_factors_generator(100):
  print(x) 



#Exercise #4 : Circle Iterator
def CircleIter(array,num_circle):
    length=len(array)
    counter=0;
    for _ in range(0,num_circle):
       if(counter==length):
           counter=0;
                
       yield array[counter]
       counter+=1;





for x in CircleIter([1,2,3],4):
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
print()   