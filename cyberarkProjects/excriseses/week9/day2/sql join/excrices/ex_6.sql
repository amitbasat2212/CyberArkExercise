USE sql_intro;
SELECT et.name_ethnicity,COUNT(pa.id_ethnicity)
FROM patient AS pa,ethnicity as et 
WHERE pa.id_ethnicity=et.id_et AND 
PA.disease="lettuce disease"
GROUP BY et.name_ethnicity
