const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

async function world() {
    const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();

        const newCity = {
            Name: "Sadad",
            CountryCode: "12356",
            District: "New District",
            Population: 25000 
        }

        
        await client.db("world").collection("city").insertOne(newCity);
 
        await client.db("world").collection("city").updateOne({Name: "Sadad"},{
          $set:{
              Population: 30000 
            }
        });

         await client.db("world").collection("city").find({Name:"Sadad"});

         await client.db("world").collection("city").find({CountryCode:"12356"});

         await client.db("world").collection("city").deleteOne({Name:"Sadad"});

        } catch(error) {
            console.error(error);
        } finally {
            await client.close();
    }
}

world();