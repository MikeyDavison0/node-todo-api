const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id = '5b3d14009f7c8611dd0ab26c';

Todo.find({
  _id: id
}).then((todos) => {
  console.log(todos);
});
