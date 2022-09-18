# def more_is_better(*args):
#   print(args)


# more_is_better(1, 2, 3, 4) 

# def print_suitcase(**suitcase):
#   for item,ammount in suitcase.items():
#     print(item, ammount) 


# def print_suitcase(**suitcase):
#   for item, ammount in suitcase.items():
#     print(item, ammount)

# items = {
#   "shirts": 2,
#   "shoes": 8,
#   "watermelon": 100
# }

# print_suitcase(**items) 


# def go_right(x,y):     
#   return x + 1, y   


# x, y = go_right(2,2) 


# print("Documentation: ", hello.__doc__)
# print("Name: ", hello.__name__)
# print("Code at: ", hello.__code__)
# print("defaults : ", hello.__defaults__)


#spot check 
from typing import Counter


def get_power_of(power):
    def caculte_exp(num):
        return num**power;
    return caculte_exp;    




calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))    # 5^2 = 25
print(calc_power_of_2(7))    # 7^2 = 49
print(calc_power_of_4(2))    # 2^4 = 16
print(calc_power_of_4(3))    # 3^4 = 81     


# def outer_func():
#   local_var = 11
  
#   def inner_func():
#     local_var = 21
#     print("inner_func local_var = ", local_var) 
  
#   inner_func()
#   print("outer_func local_var = ", local_var)


# outer_func() 

# def print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False):
#   pass

#Reduce
def reduce(f, *args):
     if len(args) == 0:
        return None
     result = args[0]
     for i in range(1, len(args)):
        result = f(result, args[i])
     return result


print(reduce(lambda x,y: x+y, -1, 4, -2))



#Max Arguments
counter=0;
def maximum_max(*args):
    global counter
    if(counter==0 or len(args) >counter):
        counter=len(args)
    return counter;




print(maximum_max())           # 0
print(maximum_max(1,2,3,7))    # 4
print(maximum_max(9,2))        # 4
print(maximum_max(1,2,3,4,5))  # 5 



#/////ask amir tommorow
def generete(key,amount=1):
    def increase(object):
        object[key]+=amount;
    return increase;    

employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
} 

generet_age_increase = generete("age");
generate_salary_increase = generete("salary",1000);
generet_age_increase(employee)
generate_salary_increase(employee)
print(employee)



#Splice Challenge-extinsion
def splice(*args):
    array = args[0];
    start=args[1]
    steps = args[2]
    place_deleted = [];   
    if(len(args)<4):
        for i in range(start,start+steps):
            place =array.pop(i);
            place_deleted.append(place);

   
    return array,place_deleted
        


nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 1);
print(nums)