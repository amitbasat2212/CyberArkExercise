USE sql_intro;
SELECT company.name,company.industry,transaction.item_purchased,transaction.amount
FROM transaction JOIN company
on transaction.company_id = company.id 
