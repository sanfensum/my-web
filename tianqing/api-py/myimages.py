import os
import random

path = "/home/sanfen/images/"
url_pre = "http://tianqing.sanfensum.cn/images/"

class MyImages():
    def __init__(self) -> None:

        self.all_images_path = []
        self.all_dir = os.listdir(path)
        self.every_dir = {}

        for dir in self.all_dir:
            now_path = path + dir
            the_dir_img = os.listdir(now_path)
            the_dir_img = [url_pre + dir + "/" + i for i in the_dir_img ]
            self.every_dir[dir] = the_dir_img
            self.all_images_path.extend(the_dir_img)
    
    def get_images_num(self) -> int:
        return len(self.all_images_path)

    def get_random_image(self) -> str:
        img_path = random.choice(self.all_images_path)
        return img_path

    def get_my_images_dir(self) -> list:
        return self.all_dir

    def get_one_dir(self, name:str) :
        the_dir_path = self.every_dir[name]
        return the_dir_path, len(the_dir_path)


    def show(self):
        # print(myImage.get_images_num())
        # print(myImage.get_my_images_dir())
        # print(myImage.get_one_dir("黄金拼图"))
        print(len(self.every_dir))
    
    
# if __name__ == "__main__":
#     myImage = MyImages()
    
        