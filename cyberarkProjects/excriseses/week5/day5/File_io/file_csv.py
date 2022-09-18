import csv
with open('excriseses\week5\day5\File_io\expenses.csv') as csv_file:
  csv_reader = csv.reader(csv_file)
  next(csv_reader) 
  total_expenses=0;
  for row in csv_reader:
    total_expenses += int(row[1])  

products = [
  {
    "name": "Apple",
    "product": "iPad",
    "price": 999
  },
  {
    "name": "Apple",
    "product": "iPod",
    "price": 1999
  },
  {
    "name": "Apple",
    "product": "iPed",
    "price": 2999
  },
  {
    "name": "Apple",
    "product": "iPud",
    "price": 3999
  },
  {
    "name": "Apple",
    "product": "iPid",
    "price": 4999
  }
] 

with open("excriseses\week5\day5\File_io\products.csv", "w") as csv_file:
  csv_writer = csv.writer(csv_file)
  for product in products:
    # create a list with our data (the values from the dict above)
    data_in_list = [product["name"], product["product"], product["price"]]
    # writes a single row each time
    csv_writer.writerow(data_in_list)





#spot check 4
stocks = [
  {"name": "Apple", "price": 246},
  {"name": "Tesla", "price": 328},
  {"name": "Microsoft", "price": 140},
  {"name": "Amazon"},
  {"name": "Lionsgate", "price": 8},
  {"name": "Netflix", "price": 276},
  {"name": "Google"},
  {"name": "Activision", "price": 55},
] 


with open("excriseses\week5\day5\File_io\stocks.csv","w") as csv_file_stock:
     csv_writer = csv.writer(csv_file_stock);
     csv_writer.writerow(["Company","Price"])    
     for stock in stocks:
        if "price" not in stock:
            stock["price"]=0;
        stocks_list = [stock["name"],stock["price"]]
        csv_writer.writerow(stocks_list)