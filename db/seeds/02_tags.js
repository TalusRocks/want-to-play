
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, name: 'pub'},
        {id: 2, name: 'portable'},
        {id: 3, name: 'family'},
        {id: 4, name: 'new gamers'},
        {id: 5, name: 'experienced gamers'},
        {id: 6, name: 'Kate'}
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));`)
    })
}
