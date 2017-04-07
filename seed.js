const mongoose = require('mongoose');
const CatDoc = require('./models/cats');
const CatData = require('./data/cat_data');

// mongoose.connect('mongodb://localhost/cats_api', function (err) {
mongoose.connect('mongodb://admin:admin@ds037005.mlab.com:37005/cat-rehoming', function (err) {
  if (err) {
    console.log(err);
    return process.exit();
  }
  CatData.forEach(function (cat, i) {
    let catDoc = new CatDoc(cat);
    catDoc.save(function (err, doc) {
      if (err) {
        return console.log(err);
      }
      console.log(`Cat ${i} ${cat.name} saved to Database`);
    });
  });
});
