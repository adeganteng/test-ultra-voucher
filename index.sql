SELECT 
    a.id,
    a.name,
    p.name as parent_name
FROM 
    table_name a
LEFT JOIN 
    table_name p ON a.parent_id = p.id
ORDER BY 
    a.id;