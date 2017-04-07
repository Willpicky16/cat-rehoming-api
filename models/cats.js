// your cats model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  ready_for_home: Boolean,
  age: Number,
  personality: Array
});

module.exports = mongoose.model('cats', catSchema);
