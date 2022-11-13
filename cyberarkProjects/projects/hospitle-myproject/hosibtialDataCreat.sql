use sql_intro;


-- CREATE TABLE Doctor(
--     Doctor_Id INT UNSIGNED NOT NULL, 
--     Doctor_Name VARCHAR(50) NOT NULL, 
--     id_hospital  INT UNSIGNED NOT NULL,     
--     Speciality VARCHAR(50) NULL, 
--     Salary INT NULL, 
--     Experience INT NULL,  
--     PRIMARY KEY (Doctor_Id) ,
--     FOREIGN KEY (id_hospital) REFERENCES Hospital(Hospital_Id)
-- );

-- CREATE TABLE Hospital(
--     Hospital_Id INT UNSIGNED NOT NULL, 
--     Hospital_Name VARCHAR(50) NOT NULL, 
--     Bed_Count INT, 
--     PRIMARY KEY (Hospital_Id)
-- );


INSERT INTO Hospital (Hospital_Id, Hospital_Name, Bed_Count) 
VALUES 
('1', 'Mayo Clinic', 200), 
('2', 'Cleveland Clinic', 400), 
('3', 'Johns Hopkins', 1000), 
('4', 'UCLA Medical Center', 1500);



INSERT INTO Doctor (Doctor_Id, Doctor_Name, id_hospital, Speciality, Salary, Experience) 
VALUES 
('101', 'David', '1', 'Pediatric', '40000', NULL), 
('102', 'Michael', '1', 'Oncologist', '20000', NULL), 
('103', 'Susan', '2', 'Garnacologist', '25000', NULL), 
('104', 'Robert', '2', 'Pediatric ', '28000', NULL), 
('105', 'Linda', '3', 'Garnacologist', '42000', NULL), 
('106', 'William', '3', 'Dermatologist', '30000', NULL), 
('107', 'Richard', '4', 'Garnacologist', '32000', NULL), 
('108', 'Karen', '4', 'Radiologist', '30000', NULL);
