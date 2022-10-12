-- USE sql_intro;

-- CREATE TABLE Dolphin(
--     name VARCHAR(50) NOT NULL PRIMARY KEY,
--     color VARCHAR(50),
--     height SMALLINT,
--     healthy BIT DEFAULT 1
-- );

-- INSERT INTO Dolphin
-- VALUES
--     ("dodo", "green",1,1),
--     ("Daron", "blue",0.4,0),
--     ("soso", "lemmon",0.2,1),
--     ("momo", "brown",3,1),
--     ("bobo", "yellow",3,0);

SELECT *
FROM Dolphin
WHERE height >2


