import time
from fastapi import FastAPI, Cookie
from fastapi.requests import Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import uvicorn

from myimages import MyImages

app = FastAPI()
origins = [
    "http://www.sanfensum.cn",
    "http://www.sanfensum.cn:8010",
    "http://www.sanfensum.cn:8086",
    "http://sanfensum.cn",
    "http://sanfensum.cn:8010",
    "http://sanfensum.cn:8086",
    "http://tianqing.sanfensum.cn"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

myimages = MyImages()

@app.get("/randomimage")
def random_image():
    return myimages.get_random_image()

@app.get("/directory")
def get_this_dir(name:str):
    images, num = myimages.get_one_dir(name)

    data = {
        "num": num,
        "list": images
    }
    return data

if __name__ == "__main__":
    uvicorn.run("apis:app", host="0.0.0.0", port=8086, log_level="info", reload=True)
