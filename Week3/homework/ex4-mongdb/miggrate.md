when I tried to use these commands :

        SELECT 'Name', 'CountryCode', 'District', 'Population'
        UNION ALL
        select Name, CountryCode, District, Population into outfile 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\city.csv'
        FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' 
        from city;

        SELECT 'Code', 'Name', 'Continent', 'Region', 'SurfaceArea', 'IndepYear', 'Population', 'LifeExpectancy', 'GNP', 'GNPOld', 'LocalName', 'GovernmentForm', 'HeadOfState', 'Capital', 'Code2'
        UNION ALL
        select * into outfile 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\country.csv'
        FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' 
        from country;

        SELECT 'CountryCode', 'Language', 'IsOfficial', 'Percentage'
        UNION ALL
        select * into outfile 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\countrylanguage.csv'
        FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' 
        from countrylanguage;
I had this errror : ERROR 1290 (HY000): The MySQL server is running with the --secure-file-priv option so it cannot execute this statement.

then I ran this command to see the variables : show variables like "secure_file_priv";
then I exit the mysql shell and I went to the path and edited the my.ini file and set the secure-file-prive = "";

then the commands worked very well.

I did an atlas account but I cant do a connection between the compass or shell and atlas so I will use the localhost.

I went to compass and created a new database and new collections and then imported the files to that i extracted from mysql.
