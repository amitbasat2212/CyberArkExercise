# import math


# math.factorial(5) 


# from math import factorial as fact


# fact(6) 


#spot check 
from math import floor,ceil,tan, pi

print(floor(-5.3))

print(ceil(16.8));

n_sides = int(input("Input number of sides: "))
s_length = float(input("Input the length of a side: "))
p_area = n_sides * (s_length ** 2) / (4 * tan(pi / n_sides))
print("The area of the polygon is: ",p_area)


# from utils.url_utils import parse_url


# parse_url("https://translate.google.com/") 


# from utils.math import fractions  

# from . import fractions 






