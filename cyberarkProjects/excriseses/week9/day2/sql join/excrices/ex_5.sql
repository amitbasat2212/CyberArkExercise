USE sql_intro;
SELECT symptoms_family,COUNT(symptoms_family)
FROM patient 
WHERE disease="cabbage disease"
GROUP BY symptoms_family