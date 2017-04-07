const express = require('express');
const router = express.Router();
const CatModel = require('../models/cats');

router.route('/').get(function (req, res) {
  res.status(200).send({status: 'OK'});
});

router.route('/cats').get(function (req, res) {
  if (Object.keys(req.query).length < 1) {
    CatModel.find({}, function (err, cats) {
      if (err) {
        return res.status(500).send({err: err});
      }
      res.status(200).send({cats: cats});
    });
  } else {
    if (req.query.name) {
      CatModel.find({name: req.query.name}, function (err, cats) {
        if (err) return res.status(500).send({err: err});
        if (cats.length < 1) return res.status(400).send({error: 'bad request'});

        res.status(200).send({cats: cats});
      })
    }
    if (req.query.readyforhome) {
      CatModel.find({ready_for_home: req.query.readyforhome}, function (err, cats) {
        if (err) return res.status(500).send({err: err});
        if (cats.length < 1) return res.status(400).send({error: 'bad request'});

        res.status(200).send({cats: cats});
      })
    }
    if (req.query.upperage) {
      CatModel.find({age: {$gt: req.query.upperage}}, function (err, cats) {
        if (err) return res.status(500).send({err: err});
        if (cats.length < 1) return res.status(400).send({error: 'bad request'});

        res.status(200).send({cats: cats});
      })
    }
    if (req.query.lowerage) {
      CatModel.find({age: {$lt: req.query.lowerage}}, function (err, cats) {
        if (err) {
          return res.status(500).send({err: err});
        }
        res.status(200).send({cats: cats});
      })
    }
    if (req.query.personality) {
      CatModel.find({personality: req.query.personality}, function (err, cats) {
        if (err) return res.status(500).send({err: err});
        if (cats.length < 1) return res.status(400).send({error: 'bad request'});

        res.status(200).send({cats: cats});
      })
    }
    if (req.query.personalitynot) {
      CatModel.find({personality: {$ne: req.query.personalitynot}}, function (err, cats) {
        if (err) return res.status(500).send({err: err});
        if (cats.length < 1) return res.status(400).send({error: 'bad request'});

        res.status(200).send({cats: cats});
      })
    }
  }
});

router.route('/cats/:cat_id').get(function (req, res) {
  CatModel.findById(req.params.cat_id, function (err, cats) {
    if (err) {
      if (err.name === 'CastError') return res.status(404).send({reason: 'CAT NOT FOUND'});
    }
    res.status(200).send({cats: cats});
  });
});

router.route('/cats').post(function (req, res) {
  let cat = new CatModel(req.body);
  cat.save(function (err, cats) {
    if (err) return res.status(500).send({err: err});

    res.status(201).json({data: cats});
  });
});

router.route('/cats/:cat_id').put(function (req, res) {
  CatModel.findById(req.params.cat_id).update(req.body, function (err, cats) {
    if (err) return res.status(500).send({err: err});

    res.status(200).json({data: cats});
  });
});

router.route('/cats/:cat_id').delete(function (req, res) {
  CatModel.findById(req.params.cat_id).remove(function (err, cats) {
    if (err) return res.status(404).send({reason: 'CAT NOT FOUND'});

    res.status(200).json({data: cats});
  });
});
module.exports = router;
