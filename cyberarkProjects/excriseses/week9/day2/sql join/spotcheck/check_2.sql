USE sql_intro;
SELECT co.name,
co.industry,
tr.item_purchased,
tr.amount

FROM transaction as tr
JOIN company as co 
on tr.company_id = co.id 
