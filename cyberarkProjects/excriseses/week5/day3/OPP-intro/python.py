# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age 


# imaginary_friends = [
#     Person("Liam", 38),
#     Person("Alex", 22),
#     Person("Luis", 19),
#     Person("Ben", 27)
#   ]
  
# for buddy in imaginary_friends:
#   print(buddy.name + " is my friend. Really.") 

#spot check 1 


class Restaurant:
    def __init__(self,name,ratings,is_vegetarian ):
        self.name=name;
        self.ratings=ratings;
        self.is_vegetarian=is_vegetarian;

    def get_menu(self):
        print("We have vegetables") if self.is_vegetarian else print("We have meat")

r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True) 

print(r3.ratings)


#spot check2

print(r3.get_menu());



#excrices 

import string

class YouTubeLessonManager:
   
   def __init__(self):
       self.lessons={};
       self.counter={};
   
   
   def save(self,name,url):
    name_format = self.name_format_for_get_and_save(name)
    self.lessons[name_format]=url;    

   
   
   def get(self,lesson_name):
    name_format = self.name_format_for_get_and_save(lesson_name)
    if(self.counter.get(name_format)):
        self.counter[name_format]+=1;
    else:
        self.counter[name_format]=1;
       
    return self.lessons[name_format];



   #bonus chapter
   def get2(self,lesson_name):
    name_format = self.name_format_for_get_and_save(lesson_name)
    for key, value in self.lessons.items():       
        if(name_format in key.lower().replace(" ", "")):
             return self.lessons[key.lower().replace(" ", "")];   



   def name_format_for_get_and_save(self,lesson_name):
        punctuation_str = set(string.punctuation)   
        str = ''.join(ch for ch in lesson_name if ch not in punctuation_str)
        name_format=str.lower().replace(" ", "")
        return name_format


    #exctions2
   def get_counts(self,name):
       name_format= self.name_format_for_get_and_save(name);
       return self.counter[name_format];


   def get_most_popular_lesson(self):
       max_value =max(self.lessons, key=self.lessons.get)
       return max_value 


    


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save("dict", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
#print(lesson_manager.lessons) # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}  

print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
#print(lesson_manager.get2("for loops"))
print(lesson_manager.get2("loops"))

lesson_manager.get("For-Loops") 
lesson_manager.get("For-Loops")
lesson_manager.get("For-Loops")
lesson_manager.get("dict")

print(lesson_manager.get_counts('For-Loops')) # outputs: 3
print(lesson_manager.get_most_popular_lesson()) # outputs: 3

