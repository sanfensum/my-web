import os
import random


class MyImages():
    def __init__(self) -> None:
        path = "/home/sanfen/images/"

        self.all_images_path = []
        self.all_dir = []
        self.every_dir = {}
        for pwd, dirs, files in os.walk(path):
            for file in files:
                file_path = os.path.join(pwd, file)
                self.all_images_path.append(file_path)
            
            for dir in dirs:
                self.all_dir.append(dir)

                dir_path = os.path.join(pwd, dir)
                the_dir_name = os.listdir(dir_path)
                the_dir_path = []
                for _name in the_dir_name:
                    the_dir_path.append(os.path.join(dir_path, _name))
                self.every_dir[dir] = the_dir_path
    
    def get_images_num(self) -> int:
        return len(self.all_images_path)

    def get_my_images_dir(self) -> list:
        return self.all_dir

    def get_one_dir(self, name:str) -> list:
        the_dir_path = self.every_dir[name]
        return the_dir_path

    def show(self):
        print(myImage.get_images_num())
        print(myImage.get_my_images_dir())
        # print(myImage.get_one_dir("黄金拼图"))
        # print(self.every_dir)
    
    
    

if __name__ == "__main__":
    myImage = MyImages()
    myImage.show()

    
        