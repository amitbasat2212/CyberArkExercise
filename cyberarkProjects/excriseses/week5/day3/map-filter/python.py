# def is_site_warm(site):
#     return site["avg_temp"] > 24


# filtered = list(filter(is_site_warm, vacation_sites))
# print(filtered)


# list(filter(a_function, a_list))[0]


#spot check 1 
print("No hidden message, don't worry.")
numbers = [152, 57, 54, 243, 235, 216, 263, 254, 66, 149, 74, 277, 169, 71, 180, 188, 174, 297, 206, 159, 96, 160, 140, 151, 20, 266, 105, 241, 210, 250, 251, 193, 28, 286, 78, 123, 240, 72, 274, 224, 117, 52, 284, 280, 175, 46, 32, 19, 29, 109, 244, 35, 196, 279, 91, 144, 221, 187, 124, 289, 200, 195, 80, 13, 127, 238, 299, 101, 130, 75, 205, 76, 110, 108, 136, 225, 233, 119, 189, 86, 112, 37, 236, 268, 114, 190, 222, 50, 269, 179, 107, 248, 163, 45, 41, 7, 3, 204, 162, 129, 9, 31, 281, 111, 42, 173, 10, 135, 33, 36, 94, 197, 261, 122, 229, 213, 70, 208, 247, 298, 47, 128, 92
]


def is_less_than_42(x):
    return x < 42


list1 = list(filter(is_less_than_42,numbers))
print(list1)



# lambda person: person["age"] > 18 or person["is_vip"]


#spot check 2 

menu = [
    {"name": "Beef stew", "vegetarian": False},
    {"name": "Beef sandwhich", "vegetarian": False},
    {"name": "Carrot on a stick", "vegetarian": True},
    {"name": "Beef eggroll", "vegetarian": False},
]

list_veg = list(filter(lambda menu_item:menu_item["vegetarian"]==True,menu))
print(list_veg)



#print(list(map(lambda m: m["name"], menu))) 

#spot check 3
things = ["tree", "leaves", "green", "letter",
          "envelope", "cost", "money", "check"]

list_length = list(map(lambda thing: len(thing),things))          

print(list_length)



#Decode excrice 
code = {
    "0": "A",
    "1": "E",
    "2": "O",
    "3": "U",
    "4": "G",
    "5": "R",
    "6": "T",
    "7": "U",
    "8": "Y"
}
encrypted_message = "82705145106"


list_cipher = list(map(lambda chiper:code[chiper] ,encrypted_message))

print("".join(list_cipher))



####/////////////////////////////////////////////

#excrices

import json

with open("excriseses\week5\day3\map-filter\pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)


#Ex 1
pokemon_data = list(map(lambda pockimon:{"id":pockimon["id"],"name":pockimon["name"],"type":pockimon["type"],"weight":pockimon["weight"],"height":pockimon["height"],"weaknesses":pockimon["weaknesses"]},pokemon_data))

#print(pokemon_data[0])


#Pokemon Names
pokemo_names = list(map(lambda pockimon:pockimon["name"],pokemon_data))

#print(pokemo_names)

#Strong Pokemons
heavy_pokemon = list(filter(lambda heavy_poc:heavy_poc["weight"]>100,pokemon_data))
#print(heavy_pokemon)


#Water Pokemons
weak_water = list(filter(lambda weak_water:"Water" in weak_water["weaknesses"],pokemon_data))
weak_water_nams = list(map(lambda pokimon:pokimon["name"],weak_water))
res = ['Charmander', 'Charmeleon', 'Charizard', 'Sandshrew', 'Sandslash', 'Nidoqueen', 'Nidoking', 'Vulpix', 'Ninetales', 'Diglett', 'Dugtrio', 'Growlithe', 'Arcanine', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Magnemite', 'Magneton', 'Onix', 'Cubone', 'Marowak', 'Rhyhorn', 'Rhydon', 'Magmar', 'Flareon', 'Aerodactyl', 'Moltres']
print(res == weak_water_nams)


####exctions 
numbers = [2, 3, 55, 4, 6, 8, 43, 10]

num_even = sorted(list(filter(lambda even:even%2==0,numbers)))
num_four_largest = num_even[:-5:-1]
num_double_even = list(map(lambda even:even**2,num_four_largest))
print(sum(num_double_even))




