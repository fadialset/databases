1 : What columns violate 1NF?
the column dinner_date because the data is not the same domain 
the columns food_code and food_description because it should only have single(atomic) valued attributes/columns.


2 : What entities do you recognize that could be extracted?

I  can create four tables with unique information from this:
members
dinner
venue
food

3: Name all the tables and columns that would make a 3NF compliant solution.

members table holds columns member_id , member_name , member adress.

dinner table holds columns dinner_id , dinner_date 

venue table bolds columns venue_code, venue_description.

food table holds columns food_code , food_description.
