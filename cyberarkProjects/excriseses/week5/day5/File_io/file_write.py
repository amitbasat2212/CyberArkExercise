# with open('example.txt', 'a') as the_file:
#   the_file.write("Pineapple\n") 
#a-to add w- to create 


#spot check 2 
goodies = ["Barnacle", "Circus", "Rake", "Cherry", "Steam", "Toothpaste", "Knee", "Coat"] 
with open("excriseses\week5\day5\File_io\example.txt","a") as goodies_file:
    goodies_only_c = [g for g in goodies if g[0]=="C"]

    for goodies_item in goodies_only_c:
         goodies_file.write(f"{goodies_item}\n")
    
      




