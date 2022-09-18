import json
the_file = open("excriseses\week5\day5\File_io\Turtles.json")
turtles_data = json.load(the_file) 
print(turtles_data[0]['gender']) 


# with open("excriseses\week5\day5\File_io\Turtles.json", "w") as the_file:
#   turtles_data.append({"test": 0})
#   json.dump(turtles_data, the_file) 


#spot check 3 
MALE = "male";
FEMALE="female";
STATUS="status"
CONDITION= "condition"
TOTAL ="total"
ALIVE = "alive"

def checking_gender_total(gender):
    if(turtule["gender"]==gender):
        if(turtule[CONDITION][STATUS]=="alive"):
            template[gender][ALIVE]+=1;
        
        template[gender][TOTAL]+=1;

template={MALE:{TOTAL:0,ALIVE:0},FEMALE:{TOTAL:0,ALIVE:0}}
for  turtule in turtles_data:
    checking_gender_total(turtule["gender"])
   

with open("excriseses\week5\day5\File_io\Turtles_summary.json","w") as turtule_summry:
    json.dump(template,turtule_summry)
