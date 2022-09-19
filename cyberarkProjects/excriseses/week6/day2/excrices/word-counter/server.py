from fastapi import FastAPI
import uvicorn
from fastapi import Request
import json
import requests
from fastapi import Response
app = FastAPI()
import re
words_counter_sum=[
    {"word":"amit","count":1},
    {"word":"lona","count":1},
    {"word":"momo","count":1}
]

def word_ganary(word):
     without_numbers_word = re.sub("[^0-9]", "",word)
     without_spicael_characters= my_new_string = re.sub('[^a-zA-Z0-9 \n\.]', '', without_numbers_word)
     word_lower = without_spicael_characters.lower()
     return word_lower;

def find_word(word):
    try:
        word_new = word_ganary(word)
        word_find = list(filter(lambda word_tem:word_tem["word"]==word_new,words_counter_sum ))
        
        if(word_find):
            return {"word":word,"count":word_find[0]["count"]}
    except KeyError:        
        return {"count":0}   
#excrice2
@app.get("/word_find/{word}")
async def word_find(word):
    return find_word(word);  



#excrice3
@app.post('/addCount')
async def words_counter(request: Request):
    respone_word = await request.json();  
    word =respone_word["word"]
    word_find = list(filter(lambda word_tem:word_tem["word"]==word,words_counter_sum ))
    if(word_find):
        word_find[0]["count"]+=1
        return word_find
    else:
        words_counter_sum.append({"word":word,"count":1})
        return words_counter_sum[len(words_counter_sum)-1]
   
#excrice4
@app.post('/addCountSentece')
async def words_counter_sentece(request: Request):
    respone_word = await request.json();
    respone_arry_words =respone_word["words"].split();
    numNewWords=0;
    numOldWords=0;
    for word in respone_arry_words:
        word_find = find_word(word) 
    if(word_find):                   
        if(word_find["count"]==1):
            numNewWords=+1;
        else:
            numOldWords=+1
    else:
        return {"the words dosent excits"}
    

    return {"text": f"Added {numNewWords} words, {numOldWords} already existed", "currentCount":numOldWords+numNewWords }            
     
  

#excrice5
@app.delete('/deleteItem/{word}',status_code=201)
async def delete_item(word,response: Response):      
   global words_counter_sum;
   words_without_the_word = list(filter(lambda word_tem:not word_tem["word"]==word,words_counter_sum ))
   if(not words_without_the_word==words_counter_sum):
     words_counter_sum= words_without_the_word;  
     return words_counter_sum;  
   else:  
     response.status_code=400       
     return {response.status_code,"the word not in the list"}
     




#exctions1



if __name__ == "__main__":
     uvicorn.run("server:app", host="0.0.0.0", port=8080,reload=True)

