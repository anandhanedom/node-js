### Sql deep dive

![sql-commands](img/sql-basic.png)

### SQL commands

1. DCL: grant,revoke
2. DDL: create,alter,drop,rename,truncate,comment
3. DML: insert, update,delete,merge,call,explain plan,lock table
4. DQL: select

### SQL functions

1. Aggregate: sum, avg, count, min, max
2. Scalar: concat, etc.

### Exercise

1. Select:
   SELECT \* from employees

2. Column renaming:
   SELECT emp_no as "Employee #" from employees

3. Column concatenation:
   SELECT CONCAT(emp_no,' is a ',title) as "Employee Title" from titles

4. Avg:
   SELECT AVG(population) from city WHERE countrycode='NLD'

5. Not:
   SELECT COUNT(\*) FROM customers WHERE NOT age='55'

6. IS FALSE:
   SELECT age FROM customers WHERE age='55' is FALSE

7. Coalesce:
   SELECT avg(coalesce(age,15)) from student;

8. Between:
   SELECT firstname,age from customers WHERE income<50000 and (age BETWEEN 30 and 50)

9. In:
   SELECT \* from employees where emp_no in (100001,100006,11008)

10. Like and ILike:
    SELECT COUNT(\*) FROM customers WHERE zip::TEXT LIKE '%2%' // casting before comparison
    SELECT \* FROM employees WHERE first_name LIKE 'G%r'
    SELECT \* FROM employees WHERE first_name ILIKE 'G%ger'
