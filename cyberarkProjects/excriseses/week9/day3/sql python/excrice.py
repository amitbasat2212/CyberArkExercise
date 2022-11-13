import pymysql 
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

# try:
#     with connection.cursor() as cursor:
#      cursor.execute("DROP TABLE IF EXISTS categories")
#      cursor.execute("DROP TABLE IF EXISTS products")

# except:
#     print("Error drop")


# try:
#     with connection.cursor() as cursor:
#         sql_product = "CREATE TABLE categories (id_grocery INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  name VARCHAR(20))"
#         cursor.execute(sql_product)
        
# except:
#     print("Error cat")


# try:
#     with connection.cursor() as cursor:
#         sql_product = "CREATE TABLE products(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),catagory_id INT,FOREIGN KEY (catagory_id) REFERENCES categories(id_grocery))"
#         cursor.execute(sql_product)
        
# except:
#     print("Error pac")



# try:
#     with connection.cursor() as cursor:
#         query_categories = 'INSERT into categories (name) values ("Vegetables"),("meat")'
#         query_products = 'INSERT into products (name,catagory_id) values ("cucamber",1),("steak",2)'
        
#         cursor.execute(query_categories)
#         cursor.execute(query_products)
#         connection.commit()
# except TypeError as e:
#     print(e)


#excrice2
try:
    with connection.cursor() as cursor:
        query_products= "SELECT * FROM products as pr,categories as ca WHERE ca.id_grocery=pr.id AND ca.name= 'Vegetables' "
        cursor.execute(query_products)        
        result = cursor.fetchall()
        print(result)
except TypeError as e:
    print(e)


#excrice3
try:
    with connection.cursor() as cursor:
        query_products= "SELECT * FROM products WHERE id=2 "
        cursor.execute(query_products)        
        result = cursor.fetchall()
        print(result)
except TypeError as e:
    print(e)