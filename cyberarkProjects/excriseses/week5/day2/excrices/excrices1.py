import calendar
from datetime import date


#excrice1
print(calendar.isleap(2010),calendar.isleap(2020))

leap_year=[];
for i in range(2020,2081):
   if calendar.isleap(i):leap_year.append(i)

print(leap_year)

my_date = date.fromisoformat('2019-12-04')
day=calendar.day_name[my_date.weekday()]

print(day)






