# mixed_tuple = (0, "apple", 3.4)
# print(mixed_tuple) 


# my_tuple = ("aaa", "bbb", "ccc", "ddd")

# # Accessing elements 2nd and 4th
# print(my_tuple[1:4]) # output: ('bbb', 'ccc', 'ddd')\


#copy 
#str[:]


#spot chekck 
numbers = (0,1,2,3,4,5,6,7,8,9)
numbers=[i for i in numbers if i%2==0]
print(numbers)

# empty_tuple = tuple([1,5,3])



#excrice1
my_tuple =(1,"2",5 ,"amit", 34.7, 1, "79","eoeo");

#excrice2
print(my_tuple[4], my_tuple[-4:-5:-1])


#excrice3
days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
days_temp = days[:2]+days[3:];
print(days_temp)


#excrice4
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(numbers[::-1])

#excrice5
def revers_tuplate(revers):
    return revers[:0:-1]

print(revers_tuplate((1,2,3)))

def revers_tuplate_last_element(revers_last):
    return revers_last[-2::-1]

print(revers_tuplate_last_element((2,4,6,8,10,12)))

