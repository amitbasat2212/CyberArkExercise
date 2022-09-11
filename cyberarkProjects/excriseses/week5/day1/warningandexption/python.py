import warnings
warnings.warn('This is a warning message') 


# ignore::PendingDeprecationWarning
# ignore::ImportWarning
# ignore::ResourceWarning 


# Cause all warnings to always be triggered.
warnings.simplefilter("always")
warnings.warn("This is ignored NO MORE", ImportWarning) 



warnings.filterwarnings("always",r".*NO MORE", ImportWarning)
warnings.warn("This is ignored", ImportWarning) 


#exptions 
try:
  raise ValueError("It is a common hobby to terminate Python programs!")
except ValueError:
  print("Caught you!")
  


try:
  raise ValueError("It is a common hobby to terminate Python programs!")
except ValueError as exp:
  print("Caught ValueError exception: ", exp.args) 


#   while True:
#   try:
#     y = int(input('Please enter a number\n'))
#     print(y)
#   except (ValueError, TypeError) as e:
#     print(f'Error is {e}') 


# class NoMoneyLeft(Exception):
#   """That what happens when you use credit card"""
#   pass




#excrice2 
def get_list_element(my_list, index):    
    try:
        print(my_list[index]) 
    except:
        print('Error is it out of index') 


get_list_element([1,2,3],4);



#excrice3
try:
   age = int(input("How old are you? "))
except Exception:
  print("Something is wrong, cannot tell exactly what...")
except ValueError:
  print("it is not a number") 
  

 #excrice4


def divide(x, y):
    try:    
        print(f'{x}/{y} is {x / y}') 
    except ZeroDivisionError  as e:
        print(e); 
    except ValueError as e:
        print(e);   
    except TypeError as e:
        print(e);           


divide(1,0)