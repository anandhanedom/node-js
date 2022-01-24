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

### Postgres uses ISO-8601 (YYYY-MM-DDTHH:MM:SS)for date and time

Example: 2017-08-17T12:47:16+02:00

### Exercise

1. Select:

   SELECT \* from employees;

2. Column renaming:

   SELECT emp_no as "Employee #" from employees;

3. Column concatenation:

   SELECT CONCAT(emp_no,' is a ',title) as "Employee Title" from titles;

4. Avg:

   SELECT AVG(population) from city WHERE countrycode='NLD';

5. Not:

   SELECT COUNT(\*) FROM customers WHERE NOT age='55';

6. IS FALSE:

   SELECT age FROM customers WHERE age='55' is FALSE;

7. Coalesce:

   SELECT avg(coalesce(age,15)) from student;

8. Between:

   SELECT firstname,age from customers WHERE income<50000 and (age BETWEEN 30 and 50);

9. In:

   SELECT \* from employees where emp_no in (100001,100006,11008);

10. Like and ILike:

    SELECT COUNT(\*) FROM customers WHERE zip::TEXT LIKE '%2%'; // casting before comparison

    SELECT \* FROM employees WHERE first_name LIKE 'G%r';

    SELECT \* FROM employees WHERE first_name ILIKE 'G%ger';

# Date operators

1. Current date:

   SELECT NOW()::DATE;
   SELECT CURRENT_DATE;

   SELECT TO_CHAR(CURRENT_DATE,'dd/mm/yyyy');

2. Date casting:

   SELECT DATE '12/12/12';

3. Age:

   SELECT AGE(DATE '1800/01/01');
   SELECT AGE(DATE '1992/01/01', DATE '1800/01/01');

4. Extraction:

   SELECT EXTRACT(DAY FROM DATE '1992/11/13');
   SELECT EXTRACT(MONTH FROM DATE '1992/11/13');
   SELECT EXTRACT(YEAR FROM DATE '1992/11/13');

   SELECT DATE_TRUNC('year', DATE '1992/11/13'); // truncation to year
   SELECT DATE_TRUNC('month', DATE '1992/11/13');  
   SELECT DATE_TRUNC('day', DATE '1992/11/13'); // no effect unless a timestamp

5. Intervals:

   SELECT \* FROM orders WHERE purchaseDate <= now() - interval '30 days'

   INTERVAL '1 year 2 months 3 days'
   INTERVAL '2 weeks ago'
   INTERVAL '1year 3 hours 20 minutes'

   SELECT EXTRACT('year' FROM INTERVAL '1 year 2 months')

Exercises:

1. select \* from employees where EXTRACT(YEAR from age(birth_date)) > 60 // older than 60
   SELECT count(birth_date) FROM employees WHERE birth_date < now() - interval '61 years'

2. select count(\*) from employees where extract(month from hire_date) = 2 // hired in feb

3. select count(\*) from employees where EXTRACT(month from birth_date) = 11 // born in nov

4. SELECT COUNT(orderid)
   FROM orders
   WHERE DATE_TRUNC('month', orderdate) = date '2004-01-01';

5. SELECT MAX(AGE(birth_date)) FROM employees;
