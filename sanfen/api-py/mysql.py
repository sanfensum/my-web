
import pymysql

class Mysql():
    def __init__(self) -> None:
        self.db = pymysql.connect(
                host='localhost',
                user='sanfen',
                password='173210',
                database='sanfen'
            )
        self.cursor = self.db.cursor()

    def __del__(self) -> None:
        self.db.close()

    def select_all_data(self):
        """
        查询所有数据
        """

        self.db.ping(reconnect=True)
        sql = """
            select * from articles
            order by create_time desc;
            """
        try:
            self.cursor.execute(sql)
            results = self.cursor.fetchall()
            return results
        except:
            return False

    def insert(self, name:str, time:str):
        """
        插入数据
        """
        
        self.db.ping(reconnect=True)
        sql = """
            insert into articles
            values
            ("{}", "{}", "{}");
        """.format(name, time, time)

        try:
            self.cursor.execute(sql)
            self.db.commit()
            return True
        except:
            self.db.rollback()
            return False

    def update(self, name:str, time:str):
        """
        修改
        """
        pass

    def delete(self, name:str):
        """
        删除
        """

        self.db.ping(reconnect=True)
        sql = """
            delete from articles
            where name = "{}";
        """.format(name)

        try:
            self.cursor.execute(sql)
            self.db.commit()
            return True
        except:
            self.db.rollback()
            print(sql)
            return False


# if __name__ == "__main__":
#     sql = Mysql()
    
#     ok = sql.delete("heep")
#     if not ok:
#         print("loss")

#     sql.select_all_data()

