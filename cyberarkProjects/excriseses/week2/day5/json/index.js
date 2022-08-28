

//excrice 1+2
let recipe = 
{
    "calories":200,
    "healthy":true,
    "name": "Mashed Potatoes",
    "serves": 4,
    "ingredients": [
      {
        "name": "water"
      },
      {
        "name": "potatoes",
        "count": 2,
       

      },
      {
        "name": "butter",
        "count": 2,
        "unit": "tablespoons"
        
      },
      {
        "name": "salt",
        "count": 0.5,
        "unit": "teaspoon"
      },
      {
        "name": "pepper",
        "count": 0.25,
        "unit": "teaspoons"
      },
      {
        "name":"garlic powder",
        "count":2,
        "unit": "teaspoons",
        
      }
    ],
    "directions": ["Cut potatoes into half inch thick slices",
      "Add potatoes to a pot and cover with an inch of water.",
      "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
      "Simmer for 20 minutes or until potatoes are fork tender.",
      "Drain water from potatoes, leaving the potatoes in the original pot.",
      "Add remaining ingredients to the pot with the potatoes.",
      "Mash potatoes until they reach the desired consistency.",
      "Serve immediately, or cover and refrigerate."
    ]
  }

console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"


//excrcie 3 
let animaels ={
    "TheAnimels":[
        {
            "name": "Gray Wolf",
            "weigh":40,
            "PlaceOfLiving":"asdod",
            "endangered":false,
            "foodFlavor":"meat",  
            "delicious":1 ,
            "howMuchEat":2,
            "diet":12        

        },
        {
            "name": "Elephant",
            "weigh":500,
            "PlaceOfLiving":"zoo",
            "endangered":true,
            "foodFlavor":"vegan",  
            "delicious":2 ,
            "howMuchEat":1,
            "diet":10      

        },
        {
            "name": "cow",
            "weigh":100,
            "PlaceOfLiving":"in the files or farm",
            "endangered":false,
            "foodFlavor":"vegan",  
            "delicious":5 ,
            "howMuchEat":3,
            "diet":12        

        },
        {
            "name": "Squirrel",
            "weigh":5,
            "PlaceOfLiving":"central park",
            "endangered":false,
            "foodFlavor":"vegan",  
            "delicious":2,
            "howMuchEat":3,
            "diet":10           

        }
    ]
    


}


let Animels = animaels.TheAnimels;

for(let i=0;i<Animels.length;i++){
   console.log(Animels[i].howMuchEat*Animels[i].diet)/100
}



