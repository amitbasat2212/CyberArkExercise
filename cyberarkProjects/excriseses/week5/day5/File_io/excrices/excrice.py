#excrice1

quizzes = [
  {"name": "Guillermo", "quiz1": 80, "quiz2": 85, "quiz3": 82},
  {"name": "Jamie", "quiz1": 78, "quiz2": 72, "quiz3": 80},
  {"name": "Otto", "quiz1": 92, "quiz2": 89, "quiz3": 96},
  {"name": "Christina", "quiz1": 91, "quiz2": 85, "quiz3": 94},
  {"name": "Ceasar", "quiz1": 62, "quiz2": 65, "quiz3": 73},
  {"name": "Barbara", "quiz1": 78, "quiz2": 68, "quiz3": 78},
  {"name": "Rosan", "quiz1": 84, "quiz2": 85, "quiz3": 81},
  {"name": "Marco", "quiz1": 79, "quiz2": 72, "quiz3": 87},
] 

for quiz in quizzes:   
    with open(f'excriseses\week5\day5\File_io\excrices\{quiz["name"]}',"w") as quiz_file:
         averag = quiz["quiz1"]+quiz["quiz2"]+quiz["quiz3"]/3
         quiz_file.write(f'Quiz1 :{quiz["quiz1"]}\n') 
         quiz_file.write(f'Quiz2 :{quiz["quiz2"]}\n') 
         quiz_file.write(f'Quiz3 :{quiz["quiz3"]}\n') 
         quiz_file.write(f'Average :{averag}\n') 



#excrice2
import json;
 

with open("excriseses\week5\day5\File_io\excrices\codes.json","w") as names_code_file:
    json.dump([
  {"name": "Afghanistan", "code": "AF"},
  {"name": "Åland Islands", "code": "AX"},
  {"name": "Albania", "code": "AL"},
  {"name": "Algeria", "code": "DZ"},
  {"name": "American Samoa", "code": "AS"},
  {"name": "Western Sahara", "code": "EH"},
  {"name": "Yemen", "code": "YE"},
  {"name": "Zambia", "code": "ZM"},
  {"name": "Zimbabwe", "code": "ZW"}
  ] ,names_code_file)



#excrice3
import csv
with open("excriseses\week5\day5\File_io\excrices\Tools.txt") as tool_file:
     tools={};
     for line in tool_file:
        for line_part in line.split("/n"):
           line_parts = line_part.split("-")
           tools[line_parts[0]]=line_parts[1].strip();
        
     with open("excriseses\week5\day5\File_io\excrices\Tools.json","w") as json_file:   
           json.dump([tools],json_file)
     with open("excriseses\week5\day5\File_io\excrices\Tools.csv","w") as csv_file:     
        csv_writer = csv.writer(csv_file);
        csv_writer.writerow(["item", "price"])
        for tool_key in tools:
           csv_writer.writerow([tool_key,tools[tool_key]])
        
#excrice4
with open("excriseses\week5\day5\File_io\excrices\Report.txt","w") as report_file:
    with open("excriseses\week5\day5\File_io\excrices\excrice4.csv") as csv_excrice4:
        csv_reader = csv.reader(csv_excrice4)
        first_row =next(csv_reader); 
        total_expenses=0;

        counter=0;
        for row in csv_reader:
            counter+=1;
            report_file.write(f'{first_row[0]}: {row[0]}\n') 
            report_file.write(f'{first_row[1]}: {row[1]}\n') 
            report_file.write(f'{first_row[2]}: {row[2]}\n') 
            report_file.write(f'{first_row[3]}: {row[3]}\n') 
            report_file.write(f'{first_row[4]}: {row[4]}\n') 
            report_file.write(f'{first_row[5]}: {row[5]}\n') 

    with open("excriseses\week5\day5\File_io\excrices\excrice4.json") as json_report:
        load_report_json =json.load(json_report)
        for dico in load_report_json:
            counter+=1;
            report_file.write(f'name: {dico["name"]}\n') 
            report_file.write(f'time: {dico["time"]}\n') 
            report_file.write(f'owner: {dico["owner"]}\n') 
            report_file.write(f'cat: {dico["cat"]}\n') 
            report_file.write(f'sub-cat: {dico["sub-cat"]}\n') 
            report_file.write(f'status: {dico["status"]}\n') 

        report_file.write(f'counter: {counter}\n')     

        

   

