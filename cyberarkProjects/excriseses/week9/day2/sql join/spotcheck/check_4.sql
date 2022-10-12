USE sql_intro;
SELECT stu.s_name
FROM Student as stu,
Student_teacher as st
,Teacher AS te  
WHERE st.student_id = stu.s_id
AND te.t_id=st.teacher_id AND  te.t_name="Foster"
     