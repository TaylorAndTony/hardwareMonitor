from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import psutil

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:8080",
    "http://127.0.0.1:8080",
    "http://192.168.1.11:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Access-Control-Allow-Origin
@app.get('/cpu/')
async def on_call():
    cpu = str(psutil.cpu_percent(0.5))
    return {"usage": cpu}


if __name__ == '__main__':
    # http://127.0.0.1:8080/cpu
    uvicorn.run(app=app, host="0.0.0.0", port=8080, workers=1)
