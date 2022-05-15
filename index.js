const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@bikewarehouse.m2oh3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
   try {
      await client.connect();
      const bikesCollection = client.db('bikewarehouse').collection('bikes');



   }
   finally {

   }
}
run().catch(console.dir);

app.get('/', (req, res) => {
   res.send('Working')
})

app.listen(port, () => {
   console.log('listenning to port', port);
})
