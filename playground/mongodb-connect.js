const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the db server');
  }
  console.log('Connected to db server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }a
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Toronto'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
