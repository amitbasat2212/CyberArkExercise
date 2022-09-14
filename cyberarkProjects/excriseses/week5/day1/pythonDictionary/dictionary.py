# user = {
#     "name": "Karolin",
#     "username": "ksmart3",
#     "age": 27,
#     "has_purchased": False
# }

# print(user["name"] + " is " + str(user["age"]) + " years old.")


# score = None
# try:
#     score = student["score"]
# except KeyError:
#     score = 0



#spot check 1
fridge = {
    "milk":2,
    "banans":4,
    "juice":2
}

print("There is one bottle of milk left " if fridge["milk"]==1 else fridge["milk"])


#spot check 2 

closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}


print(closet["shirts"]["white"])
print(closet["shirts"]["flamingo-pink"])
closet["pants"]["jeans"]["organic"]=7
print(closet["pants"]["jeans"]["organic"])
closet["pants"]["jeans"]["denim"]-=4;
print(closet["pants"]["jeans"]["denim"])
print("top" if closet["shirts"]["flamingo-pink"] >closet["pants"]["shorts"]["flamingo-pink"] else "bottom" )



#person.keys()

# for key,value in person.items():
#     print(key, value)



names = ["koko", "momo", "bobo"]



#spot check 3 

def SquerOfNumbers(n):
    dicitionary={str(i): i**2 for i in range(1,n)}
    return dicitionary;

print(SquerOfNumbers(5))



#excrice1

state = "France"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}

print(f'The president of {state} is {heads_of_states[state]["president"]} and the prime minister is {heads_of_states[state]["prime minister"]}')


#excrice2 

user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}

user_months[user_id]+=bonus_months;

print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")

print(user_months[user_id])


#excrice3

country_populations={};

country ="Ghana";
country_populations["Ghana"]=28
country_populations["Brazil"]=209
country_populations["Mongolia"]=3

# for key,value in country_populations.items():
#     if value >50:
#         print(f'{key} is big country')
#     else:
#         print(f'{key} is small country')

print(country, "is a big country") if country_populations[country] >= 50 else print(country, "is a small country")    


#excrice4

tomato = "Tomato Soup"
onion = "Onion Soup"
carrot = "Carrot Soup"

user_preferences = {
    "Sarah": tomato,
    "Sheila": carrot,
    "Fernando": tomato,
    "Jovan": onion,
    "Simona": carrot
}

soup_recipes = {
    tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
    onion: "Be prepared to cry",
    carrot: "Find a rabbit, ask him how to make a carrot soup"
}

user = "Simona"

souprecipe= soup_recipes[user_preferences[user]]
print(f'{souprecipe}')



#extinsion1
line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"

from collections import defaultdict

from queue import Empty

def def_value():
    return "Not Present"

def get_5common(line):
     counts = defaultdict(def_value)
     words = line.split()     
     for word in words:
            if word in counts:
                counts[word] += 1
            else:
                counts[word] = 1

     return counts

wordscount = get_5common(line);
wordscountsorted = sorted(wordscount.items(), key=lambda x: x[1], reverse=True)
wordscountsorted=wordscountsorted[:5];
print(wordscountsorted)
  
# from collections import Counter

# def five_high_freq(text):
#     line = text.split()
#     return Counter(line).most_common(5)
  

# line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
# print(five_high_freq(line))



#exctions2
from curses.ascii import islower;
def isPalindrome(s):
    return s == s[::-1]
flag = True;

while flag:    
    inputNumber = input("enter an input  ");
    print("the avilible opertions are:")
    print("1-palindrom")
    print("2-Lower")
    print("3-Digit")
    print("4-Long")
    print("5-empty")
    print("6-exit")    
    inputCohice = input("enter an input choice of opertor ");
    print(inputCohice)
    if(inputCohice=="1"):
        print("hi")
        print(isPalindrome(inputNumber))
    elif(inputCohice=="2"):
        print(True if inputNumber.islower() else False)
    elif(inputCohice=="3"):
        print(True if inputNumber.isnumeric() else False)        
    elif(inputCohice=="4"):
        print(True if len(inputNumber)>=15 else False)        
    elif(inputCohice=="5"):
        print(True if len(inputNumber)==0 else False)        
    elif(inputCohice=="6"):
        break;       
    

    


