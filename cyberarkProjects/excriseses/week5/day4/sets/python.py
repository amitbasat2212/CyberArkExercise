s = set()


s.update([11, 22], (55,), ('mimi',))
print(s)

# s.discard('Avi')
# s.remove('Itzik')
# s.add("mim")


# s1.union(s2) # {1,3,5,2,4}

# s1.intersection(s2) #{1,2}

# s1 = {1, 2, 5}
# s2 = {2, 4, 1}
# s1 - s2 # {5}

# s1.difference([6,7,5])

# s1.symmetric_difference(s2)

# print(s1.isdisjoint(s2))

# print(s1.issuperset(s2))


#s2.issubset(s1)

# fs = frozenset((1, 2, 3, 4))


##excrices

###intro 
import json
with open("excriseses\week5\day4\sets\yc_jobs.json") as pokemon_file:
    jobs = json.load(pokemon_file)


#Search in Description
def find_jobs_by_word(word):
    jobs_with_this_word = list(filter(lambda job:word in job["job_description"],jobs))
    return jobs_with_this_word;



print(len(find_jobs_by_word("experience"))) # 165



#Junior Jobs in Brooklin
def junior_jobs():
    brokli_jobs = set([job["agency"]  for job in jobs if "Broadway" in job["work_location"]])
    entry_level = set([entry["agency"] for entry in jobs if "Entry-Level" in entry["career_level"]])
     
    all_broklin_entery =brokli_jobs & entry_level;
    return all_broklin_entery


print(junior_jobs())



#Max Hourly Salary

def max_hourly():
     job_per_hours = set([job["salary_range_to"]  for job in jobs if job["salary_frequency"]=="Hourly"]);
     job_entry = set([job["salary_range_to"]  for job in jobs if "Entry-Level" not in job["career_level"]]); 
     jobs_not_entry_hourly = max(job_per_hours&job_entry)
     return jobs_not_entry_hourly


print(max_hourly())


#Salaries in Range-ask amir tomorrow
def salary():
     salary_all = set([job["agency"] for job in jobs if float(job["salary_range_from"])>=17  and float(job["salary_range_to"])<=21])
     return salary_all;   


print("in range" ,salary())     





