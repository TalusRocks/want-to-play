
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, name: 'Pulsar 2849', interest: 6, minPlayer: 2, maxPlayer: 4, minTime: 60, maxTime: 90, ratingBGG: 7.4, weightBGG: 3.00, notes: 'dice drafting'},
        {id: 2, name: 'Azul', interest: 4, minPlayer: 2, maxPlayer: 4, minTime: 30, maxTime: 45, ratingBGG: 7.8, weightBGG: 2.13, notes: 'beautiful tile placement'},
        {id: 3, name: 'Meeple Circus', interest: 6, minPlayer: 2, maxPlayer: 5, minTime: 30, maxTime: 45, ratingBGG: 7.5, weightBGG: 1.57, notes: 'dexterity'},
        {id: 4, name: 'Fields of Arle', interest: 5, minPlayer: 1, maxPlayer: 2, minTime: 60, maxTime: 120, ratingBGG: 8.2, weightBGG: 3.91, notes: 'worker placement'},
        {id: 5, name: '7 Wonders Duel', interest: 7, minPlayer: 2, maxPlayer: 2, minTime: 30, maxTime: 30, ratingBGG: 8.2, weightBGG: 2.24, notes: 'card drafting, set collection'},
        {id: 6, name: 'BEEEEES!', interest: 6, minPlayer: 2, maxPlayer: 5, minTime: 30, maxTime: 30, ratingBGG: 7.2, weightBGG: 2.00, notes: 'real-time, competitive'},
        {id: 7, name: 'Scythe', interest: 10, minPlayer: 1, maxPlayer: 7, minTime: 90, maxTime: 115, ratingBGG: 8.3, weightBGG: 3.35, notes: '4x, alternate-history, interesting art'},
        {id: 8, name: 'The 7th Continent', interest: 8, minPlayer: 1, maxPlayer: 4, minTime: 5, maxTime: 1000, ratingBGG: 8.9, weightBGG: 2.85, notes: 'Cooperative and story-driven campaign'},
        {id: 9, name: 'Photosynthesis', interest: 5, minPlayer: 2, maxPlayer: 4, minTime: 30, maxTime: 60, ratingBGG: 7.5, weightBGG: 2.5, notes: 'You are literally trees'},
        {id: 10, name: 'Petrichor', interest: 7, minPlayer: 1, maxPlayer: 4, minTime: 20, maxTime: 80, ratingBGG: 7.4, weightBGG: 3.00, notes: 'You are literally clouds'},
        {id: 11, name: "Best Game Eva'", interest: 7, minPlayer: 2, maxPlayer: 5, minTime: 40, maxTime: 90, ratingBGG: 7.4, weightBGG: 3.25, notes: "It'll blow your mind"},
        {id: 12, name: "Cooler Than Cool", interest: 7, minPlayer: 3, maxPlayer: 7, minTime: 45, maxTime: 90, ratingBGG: 7.5, weightBGG: 2.85, notes: "Ice Cold"}
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));`)
    })
}
