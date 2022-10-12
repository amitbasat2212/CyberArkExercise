USE sql_intro;

--  INSERT INTO Dolphin
-- VALUES    
--     ("EOEO", "blue",1,1),  
--     ("WOKO", "yellow",3,1);

SELECT name,height
FROM Dolphin 
WHERE healthy =1
ORDER BY height DESC