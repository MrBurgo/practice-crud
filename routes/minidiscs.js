const express = require('express')
const knex = require('../knex')

const router = express.Router()
// CREATING NEW MINIDISC
router.get('/new', (req, res, next) => {
  res.render('minidiscs', {})
})
// READ ALL records for this table
router.get('/', (req, res, next) => {
  // res.send('ALL RECORDS')
  knex('minidiscs')
    .then((arr) => {
      res.json(arr)
    })
    .catch((error) => {
      next(error)
    })
})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  // res.send('ONE RECORD')
  knex('minidiscs')
    .where('id', req.params.id)
    .then((object) => {
      res.json(object)
    })
    .catch((error) => {
      next(error)
    })
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  // res.send('CREATED RECORD')
  knex('minidiscs')
    .insert({
      title: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      genre: 'Rock',
      description: 'Bwow Bwow',
      cover_url: 'nirvana.url'
    })
    .returning('*')
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      next(error)
    })
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  // res.send('UPDATED RECORD')
  knex('minidiscs')
    .where('id', req.params.id)
    .limit(1)
    .update({
      title: 'Some new song',
      artist: 'Rock n Rollers',
      genre: 'Rock',
      description: 'De Bow Bow',
      cover_url: 'DeBowBow.url'
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((error) => {
      next(error)
    })
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  // res.send('DELETED RECORD')
  knex('minidiscs')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) return next()
      knex('minidiscs')
        .del()
        .where('id', req.params.id)
        .then(() => {
          res.send(`ID ${req.params.id} Deleted`)
        })
    })
    .catch((error) => {
      next(err)
    })
})
module.exports = router
