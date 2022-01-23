### Sql deep dive

![sql-commands](img/sql-basic.png)

### SQL commands

1. DCL: grant,revoke
2. DDL: create,alter,drop,rename,truncate,comment
3. DML: insert, update,delete,merge,call,explain plan,lock table
4. DQL: select

### Exercise

1. Select
   SELECT \* from "public"."employees"

2. Column renaming
   SELECT emp_no as "Employee #" from "public"."employees"

3. Column concatenation
   SELECT CONCAT(emp_no,' is a ',title) as "Employee Title" from "public"."titles"
