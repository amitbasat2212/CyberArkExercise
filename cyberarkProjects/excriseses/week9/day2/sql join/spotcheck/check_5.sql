USE sql_intro;
SELECT te.t_name
FROM Teacher as te ,
Student as stu,
Student_teacher as st
WHERE st.student_id = stu.s_id
AND te.t_id=st.teacher_id
AND stu.s_name="Leo"
AND te.is_tenured=1
    