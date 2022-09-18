#excrice1
from xmlrpc.client import Boolean
from fastapi import FastAPI

app = FastAPI()

import uvicorn

@app.get('/sanity')
async def return_string():
    return "Server is up and running smoothly"



from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory="static"), name="static")    

from fastapi.responses import FileResponse

@app.get('/mountion')
def mountion():
    return FileResponse('./static/images/nountin.jpg')


@app.get('/be')
def be():
    return FileResponse('./static/images/be.jpg')


@app.get('/music')
def be():
    return FileResponse('./static/audio/file.mp3')


#excrice2
from store import store;

@app.get('/store/{name}')
async def price_item(name):
    price={"price":None}
    for item in store:
        if(item["name"]==name):
            price={"price":item["price"]};        
    return price;

#excrice4
@app.get("/bying/{name}")
async def bying_item(name):  
    for item in store:
        if(item["name"]==name):
            if( item["inventory"]==0):
                item["inventory"]="no more inventory";  
                return item;   
            item["inventory"]-=1;  
           
            return item;
        
              
@app.get('/sale/')  
async def reduce_by_discount(admin:bool=False):
    if(admin==True):
        for item in store:
            if( item["inventory"]>10):
                item["price"]/=2;
                return item;


#exctionsion1

            


if __name__ == "__main__":
     uvicorn.run("main:app", host="0.0.0.0", port=8080,reload=True)

