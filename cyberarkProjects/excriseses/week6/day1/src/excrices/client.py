#excrice2 
from fastapi import FastAPI

app = FastAPI()


import main
import requests
res = requests.get('http://localhost:8080/store/'+"couch")
print(res.json())



#excrice4
res2 = requests.get('http://localhost:8080/bying/'+"couch")
print(res2.json())


#excrice5
user_product=input("what frnuturie do you want ? ")
res3 = requests.get('http://localhost:8080/bying/'+user_product)
json_result = res3.json();
item = json_result["name"];
price=json_result["price"];
inventory=json_result["inventory"];
print(f"Congratulations, you've just bought {item} for {price}. There are {inventory} left now in the store.")



#excrice5
res4 = requests.get('http://localhost:8080/sale/',params={"admin":True})
print(res4.json())



#exctions 1 
money=1300;
product = "chair"
res_price_of_fruntiure = requests.get('http://localhost:8080/store/'+product)
respone_price = res_price_of_fruntiure.json();
price = respone_price["price"]

if(float(respone_price["price"])<money):
    res_buy = requests.get('http://localhost:8080/bying/'+product)
    money-=price;
    print(res_buy.json())
else:
     print({"you need to get a job "})


#exctions2
import sched, time


price_previws=0;   
s = sched.scheduler(time.time, time.sleep)    
def price_of_fru(sc): 
    respone = requests.get('http://localhost:8080/store/'+product)
    price_json =  respone.json();
    price = price_json["price"];
    if(price_previws==0):
        price_previws=price;
    elif(price<price_previws):
       respone = requests.get('http://localhost:8080/bying/'+product)      
       print("bought chair for less")
    else:
       print("still waiting for a price drop...")

    sc.enter(60, 1, price_of_fru, (sc,))


s.enter(60, 1, price_of_fru, (s,))
s.run()
   


 
 
    
