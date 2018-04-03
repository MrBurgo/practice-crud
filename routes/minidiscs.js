const express = require('express')
const knex = require('../knex')

const router = express.Router()
// READ ALL records for this table
router.get('/', (req, res, next) => {
  res.send('ALL RECORDS')
  // knex('minidiscs')
  //   .then((rows) => {
  //     res.json(rows)
  //   })
  //   .catch((error) => {
  //
  //   })
})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  res.send('ONE RECORD')
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  res.send('CREATED RECORD')
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  res.send('UPDATED RECORD')
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  res.send('DELETED RECORD')
})
module.exports = router
