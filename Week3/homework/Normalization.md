1 : What columns violate 1NF?
the column  member_address because it has two differnet data types sting and number
the column dinner_date because the data is not the same domain 
the columns food_code and food_description because it should only have single(atomic) valued attributes/columns.


2 : What entities do you recognize that could be extracted?
member_adress can be extracted  to two entities member_adress_no and member_adress_name.

3: Name all the tables and columns that would make a 3NF compliant solution.

members table holds columns member_id , member_name , member adress_no and member_adress_name .

dinner table holds columns dinner_id , dinner_date 

venue table bolds columns venue_code, venue_description.

food table holds columns food_code , food_description.
