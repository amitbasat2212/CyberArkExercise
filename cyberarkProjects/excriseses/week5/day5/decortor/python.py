from functools import wraps


def my_decorator(some_func):
  @wraps(some_func)
  def wrapper():
    print("1. before executing some_func()")
    some_func() # here we execute the function
    print("2. after executing some_func()")
  return wrapper 


def just_print():
  print("** some function that uses the decorator")
  

print_senteces = my_decorator(just_print)
print_senteces()


# def print_args(func):
#   @wraps(func)
#   def inner(*args, **kwargs):
#     print("args: ", end=" ")
#     for x in args:
#       print(x, end=" ")
#     print()
#     res = func(*args, **kwargs)
#     print(res)
#     return res
#   return inner 
  
# @print_args
# def add2(x, y):
#   return x+y
  
# @print_args
# def add3(x, y, z):
#   return x+y+z

# @print_args
# def add4(w, x, y, z):
#   return w+x+y+z

# add2(1,2)
# add3(1, 2, 3)
# add4(1,2, 2, 4) 

#excrice1 
import time

def print_how_much_time(func):
    def time_runnig_for_func(number):
        start = time.time()
        func(number);
        end=time.time();
        time_pass = end-start;
        print(time_pass)
    return time_runnig_for_func;    


@print_how_much_time
def sum_many(number):
    sum_numbers=0;
    for i in range(0,number):
        sum_numbers+=i;


# sum1 = sum_many(10000000)
# sum2 = sum_many(50000000) 


#Exercise #2 : Print Function Information
def details_on_func(func):
    def details(*args,**kwargs):        
        res=func(args)
        print("Name: ", func.__name__)
        print("kwargs : ", kwargs)
        print("args : ", args)
        print("return value:", res) 
        print("return type:", type(res)) 
        return res
    return details    


@details_on_func
def add (*args):
    result_sum_args =0  
    for x in args:  
      result_sum_args=sum(x)
    return result_sum_args

add(1, 2 , age=3, text="hello")


#Exercise #3 : Slow Down
def slow_down_function(func):
    def slow_down(number):
        time.sleep(number);
        func(number);       
    return slow_down;    

@slow_down_function
def print_hello(number):
    print("hello")


print_hello(1)



#Exercise #4 : Number of calls to a func
counter_func_exe =0
def counter_to_func_exctionion(func):
    def counter_func():
        func()  
        global counter_func_exe
        counter_func_exe+=1;
        return counter_func_exe
          
    return counter_func;    

@counter_to_func_exctionion
def counter_print():
    pass


print(counter_print())  
print(counter_print())



#Exercise #5 : Cache Decorator
caculate_history={};
def cache_mechanism_for_func(func):
    def caculate(*args):
        num=args[0];
        num_fibonacci=num;           
        if(num in caculate_history.keys()):
            return caculate_history[num_fibonacci]            
        else:
            result=func(num)
            caculate_history[num_fibonacci]=result   
            return result
    return caculate


@cache_mechanism_for_func
def Fibonacci(num_fibonacci):
    print("calculating: ", num_fibonacci) 
    if num_fibonacci < 0:
        print("Incorrect input")
    elif num_fibonacci == 0:
        return 0

    elif num_fibonacci == 1 or num_fibonacci == 2:
        return 1
 
    else:
        return Fibonacci(num_fibonacci-1) + Fibonacci(num_fibonacci-2)


Fibonacci(1)     
Fibonacci(1)   
Fibonacci(4)        