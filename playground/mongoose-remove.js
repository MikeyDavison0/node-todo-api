const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.findByIdAndRemove('5b3d4255faa36af473963682').then((todo) => {
  console.log(todo);
});
