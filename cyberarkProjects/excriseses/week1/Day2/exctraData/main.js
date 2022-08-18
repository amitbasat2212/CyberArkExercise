
people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getAge(age){
    if(age<21){
        return "Underage"
        
    }
    else if(age>55){
        return "55+"
        
    }else{
        return age
        
    }
    
  }
  

  const getSummary = function(person){
    let summary = ""//modify the summary string with the person parameterreturn summary
    summary+=capitalizeFirstLetter(person.name)
    summary+=" "
    summary+=getAge(person.age);
    summary+=" "
    summary+=capitalizeFirstLetter(person.profession)
    summary+=" "
    summary+= capitalizeFirstLetter(person.city+","+person.country)
    summary+=" "
    summary+= capitalizeFirstLetter(person.name+" "+"loves to say ")
    summary+=" "
    summary+=capitalizeFirstLetter(person.catchphrase)
    summary+=" "
    
    return summary;
  }
 
    
  for (let index = 0; index < people_info.length; index++) {
    console.log(getSummary(people_info[index]));
    
  }


const story = "In the beginning there was light. Then there were wolves.Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then,the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

function splitTheStory(){
    let story2;
    story2 = story.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    countwords(story2)

}

function countwords(story){
    let str= story.split(" ")
    console.log(str)
   
    for (let index = 0; index < str.length; index++) {
        str[index]=str[index].toLowerCase()
        if(!wordCounts[str[index]]){
            wordCounts[str[index]]=0
        }
        wordCounts[str[index]]++;
         
        
    }
    console.log(wordCounts)
}

splitTheStory()

