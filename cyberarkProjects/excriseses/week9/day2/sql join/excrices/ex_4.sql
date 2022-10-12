USE sql_intro;
SELECT pa.id,di.survivalt_rate
FROM patient AS pa , disease as di
WHERE pa.disease=di.name_disease 
ORDER BY pa.id 