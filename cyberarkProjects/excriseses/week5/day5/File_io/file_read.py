the_file = open("excriseses\week5\day5\File_io\example.txt")
groceries = the_file.read().split("\n") 
print(groceries)


#spot check 1 
the_file = open("excriseses\week5\day5\File_io\Attednec.txt")
students_names = the_file.read().split("\n") 
student_attendance={};

for student in students_names:
    if(student in student_attendance.keys()):
        student_attendance[student]+=1;
    else:
        student_attendance[student]=1;

print(student_attendance)         