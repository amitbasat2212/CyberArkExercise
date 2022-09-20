from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import Response
app = FastAPI()
import re



words_counter_sum=[
    {"word":"amit","count":1},
    {"word":"lona","count":3},
    {"word":"momo","count":1}
]



def word_ganary_foramt(word):
     without_numbers_word = ''.join([i for i in word if not i.isdigit()])
     without_spicael_characters=re.sub('[^a-zA-Z0-9 \n\.]', '', without_numbers_word)
     word_lower = without_spicael_characters.lower()
     return word_lower;



def find_word(word):
    try:
        word_new = word_ganary_foramt(word)
        word_find = list(filter(lambda word_tem:word_tem["word"]==word_new,words_counter_sum ))
        if(word_find):
            return {"word":word,"count":word_find[0]["count"]}
    except KeyError:        
        return {"count":0}   
#excrice2
@app.get("/word_find/{word}")
async def word_find(word):
    word_new = word_ganary_foramt(word)
    return find_word(word_new);  



#excrice3
@app.post('/addCount')
async def words_counter(request: Request):
    respone_word = await request.json();  
    word =respone_word["word"]
    word_new = word_ganary_foramt(word)
    word_find = list(filter(lambda word_tem:word_tem["word"]==word_new,words_counter_sum ))
    if(word_find):
        word_find[0]["count"]+=1
        return word_find
    else:
        words_counter_sum.append({"word":word_new,"count":1})
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
   word_new = word_ganary_foramt(word)
   words_without_the_word = list(filter(lambda word_tem:not word_tem["word"]==word_new,words_counter_sum ))
   if(not words_without_the_word==words_counter_sum):
     words_counter_sum= words_without_the_word;  
     return words_counter_sum;  
   else:  
     response.status_code=400       
     return {response.status_code,"the word not in the list"}
     

#exctions1
@app.get("/topPopolur")
async def get_popolur_word():   
    maxPricedItem = max(words_counter_sum, key=lambda x:x['count'])
    return maxPricedItem;


@app.get("/sumallwords")
async def sum_all_words():   
   sum_words_count = sum([word["count"] for word in words_counter_sum ])
   the_sum = {"text": "Total count", "count": sum_words_count };
   return the_sum



if __name__ == "__main__":
     uvicorn.run("server:app", host="0.0.0.0", port=8080,reload=True)

