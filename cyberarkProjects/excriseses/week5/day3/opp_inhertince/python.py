# class Singer(Artist):
#   pass
  
# class Actor(Artist):
#   pass 

# class Actor(Artist):
#   def __init__(self, name, income, most_known):
#     super().__init__(name, income)
#     self.most_known = most_known

# a = Actor("Al", 24, "Scar")
# a.perform()
# print(a.most_known) # outputs: Scar


#spot check 1 

class Rectangle :
    def __init__(self,width,height):
        self.width=width;
        self.height=height;


    def calculate_area (self):
        return self.width*self.height;

    def calculate_perimeter (self):
        return (2*self.height)+(2*self.width)



class Square(Rectangle) :
     def __init__(self,length):
        super().__init__(length,length)
        self.length =length;

     def calculate_perimeter(self):
           return 4*self.length;



s = Square(2)
print(s.calculate_perimeter()) # outputs: 8
print(s.calculate_area()) # outputs: 4 




# isinstance(s, Singer) # outputs: True 


