
from urllib import response
from fastapi import FastAPI

import pymysql 
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="sql_intro",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)




app = FastAPI()

import uvicorn

def fetch_data_from_data_base(param_name,value,table):
    try:
        with connection.cursor() as cursor:
            query_hospital_detailes = f"SELECT * FROM {table} WHERE {param_name}={value};"
            cursor.execute(query_hospital_detailes)        
            result = cursor.fetchall()
            return result;
    except TypeError as e:
        return e;


@app.get('/hospitals/', status_code=200)
def fetch_hospital_detailes(hospital_id):
    try:
       result = fetch_data_from_data_base("Hospital_Id",hospital_id,"hospital")
       return result;
    except TypeError as e:
        return e;


@app.get('/doctors/{doctor_id}', status_code=200)
def fetch_doctor_detailes(doctor_id):
    try:
        result = fetch_data_from_data_base("Doctor_Id",doctor_id,"doctor")
        return result;
    except TypeError as e:
        return e;



@app.get('/doctors/', status_code=200)
def get_doctors_by_spicilty_and_salary(speciality, salary):
    try:
        with connection.cursor() as cursor:
            query_doctors_by_specilty_and_salary = f"SELECT * FROM doctor WHERE Speciality = '{speciality}' AND Salary >{salary};"
            cursor.execute(query_doctors_by_specilty_and_salary)        
            result = cursor.fetchall()
            return result;
    except TypeError as e:
        return e;
 
@app.get('/doctors/hospitals/{hospital_id}', status_code=200)
def get_doctors_by_hospital(hospital_id):
    try:
        result = fetch_data_from_data_base("id_hospital",hospital_id,"doctor")
        return result;
    except TypeError as e:
        return e;





if __name__ == "__main__":
     uvicorn.run("server:app", host="0.0.0.0", port=8050,reload=True)
