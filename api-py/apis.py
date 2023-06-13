import time
from fastapi import FastAPI, Cookie
from fastapi.requests import Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import uvicorn

from mysql import Mysql
from mywater import Mysql_water
from mylogin import IsMe, Cookie
from myimages import GetPic

mysql = Mysql()
mywater = Mysql_water()

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

origins = [
    "http://www.sanfensum.cn",
    "http://www.sanfensum.cn:8010",
    "http://sanfensum.cn",
    "http://sanfensum.cn:8010",
    "http://tianqing.sanfensum.cn"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#  markdown 文件 ####################################################
@app.get("/sqlapi/files/allmyfiles")
def AllMyFile():
    myFiles = mysql.select_all_data()

    if myFiles is False:
        return "select error"

    data = []
    for file in myFiles:
        _data = {
            "name": file[0],
            "create_time": str(file[1]).replace("T", " "),
            "update_time": str(file[2]).replace("T", " "),
            "url" : "../../md/" + file[0] + ".md"
        }
        data.append(_data)
    return data

@app.get("/sqlapi/files/insert")
@limiter.limit("60/60second")
def Insert(name:str, request: Request):
    _time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())

    ok = mysql.insert(name, _time)
    return ok


# ##  水    #########################################
@app.get("/sqlapi/water/allmywater")
def AllMyFile():
    myWaters = mywater.select_all_data()

    if myWaters is False:
        return "select error"

    waters = []
    for water in myWaters:
        _water = {
            "water": water[0],
            "create_time": water[1]
        }
        waters.append(_water)
    return waters

@app.get("/sqlapi/water/insert")
@limiter.limit("60/60second")
def Insert(water:str, request: Request):
    _time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())

    ok = mywater.insert(water, _time)
    return ok


@app.get("/sqlapi/water/delete")
def Delete(water:str):
    ok = mywater.delete(water)
    return ok


# login  ########################################
@app.get("/login")
@limiter.limit("60/60second")
def Login(pwd:str, request: Request):
    return IsMe(pwd)


@app.get("/cookie")
@limiter.limit("60/60second")
def Login(cookie:str, request: Request):
    return Cookie(cookie)


# so good ##########################################
@app.get("/myimage")
def MyPic():
    return GetPic()

if __name__ == "__main__":
    uvicorn.run("apis:app", host="0.0.0.0", port=8010, log_level="info", reload=True)
