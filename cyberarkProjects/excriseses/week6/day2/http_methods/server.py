from fastapi import FastAPI
import uvicorn
from fastapi import Request

app = FastAPI()

wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.get('/wonders/{id}')
def get_wonders(id):
    for wonder in wonders:
        if(wonder["ID"] == int(id)):
            return wonder["name"]
    return ""

@app.post('/Addwonders',status_code=201)
async def create_wonder(request: Request):
    print("Someone's trying to make a post request")
    res = await request.json()
    wonders.append({"ID":res["id"],"name":res["name"],"location":res["location"]})
    return wonders[len(wonders)-1]



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8100)
