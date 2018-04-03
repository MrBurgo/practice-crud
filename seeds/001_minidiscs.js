exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('minidiscs').del()
    .then(() => {
      // Inserts seed entries
      return knex('minidiscs').insert([{
        id: 1,
        title: 'Black Hole Sun',
        artist: 'Soundgarden',
        genre: 'Rock',
        description: 'Wont ya come',
        cover_url: 'soundgarden.url'
      },
      {
        id: 2,
        title: 'VS',
        artist: 'Pearl Jam',
        genre: 'Rock',
        description: 'Its Okay',
        cover_url: 'pearljam.url'
      },
      {
        id: 3,
        title: 'Pulse',
        artist: 'Pink Floyd',
        genre: 'Rock',
        description: 'Woooo',
        cover_url: 'pinkfloyd.url'
      }
      ])
        .then(() => {
          // Moves id column (PK) auto-incrementer to correct value after inserts
          return knex.raw("SELECT setval('minidiscs_id_seq', (SELECT MAX(id) FROM minidiscs))")
        })
    })
}
