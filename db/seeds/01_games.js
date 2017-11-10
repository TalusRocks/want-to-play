
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, name: 'Pulsar 2859', interest: 6, minPlayer: 2, maxPlayer: 4, minTime: 60, maxTime: 90, ratingBGG: 7.4, weightBGG: 3.00, notes: 'dice drafting'},
        {id: 2, name: 'Azul', interest: 4, minPlayer: 2, maxPlayer: 4, minTime: 30, maxTime: 45, ratingBGG: 7.8, weightBGG: 2.13, notes: 'beautiful tile placement'},
        {id: 3, name: 'Meeple Circus', interest: 6, minPlayer: 2, maxPlayer: 5, minTime: 30, maxTime: 45, ratingBGG: 7.5, weightBGG: 1.57, notes: 'dexterity'},
        {id: 4, name: 'Fields of Arle', interest: 5, minPlayer: 1, maxPlayer: 2, minTime: 60, maxTime: 120, ratingBGG: 8.2, weightBGG: 3.91, notes: 'worker placement'},
        {id: 5, name: '7 Wonders Duel', interest: 7, minPlayer: 2, maxPlayer: 2, minTime: 30, maxTime: 30, ratingBGG: 8.2, weightBGG: 2.24, notes: 'card drafting, set collection'}
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));`)
    })
}
