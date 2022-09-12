import time
import datetime


# print(time.time())
#   # Output: 1583755084.906643
# print(time.ctime())
#   # Output: Mon Mar  9 13:58:04 2010  

# print(datetime.datetime.today().strftime("%m/%d/%Y"))



#excrice1
print(datetime.date.today().day)
print(datetime.date.today().year)
print(datetime.date.today().ctime())
print(datetime.date.today())
print(datetime.date.today())
print(datetime.datetime.today().strftime("%M:%S.%f"))

dattime = datetime.date.today().strftime("%m/%d/%Y")
dattime1 = datetime.date.today().strftime("%d/%m/%Y")
hourandseconed = datetime.date.today().strftime("%H:%M:%S")
#excrice2
print(f"current1: {dattime}, {hourandseconed}")
print(f"current1: {dattime1}, {hourandseconed}")


#excrice3
print(f"current year: {datetime.date.today().year}, ")
print(f"current day : {datetime.date.today().day}")




