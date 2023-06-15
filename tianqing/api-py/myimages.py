import os
import random

def GetPic():
    # pass
    localPicPath = os.listdir('../../../../images/')
    img_name = random.choice(localPicPath)
    iWantPic = "http://tianqing.sanfensum.cn/images/" + img_name

    return iWantPic
