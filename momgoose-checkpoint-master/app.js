require('dotenv').config()
const { MongoClient } = require('mongodb');

const mongoose = require("mongoose")
const { Person, personSchema } = require('./person');



mongoose.connect(process.env.DATABASE_URL);
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected successfully to database');

  


  const people = client.db("ANGELDB").collection("people");

});

