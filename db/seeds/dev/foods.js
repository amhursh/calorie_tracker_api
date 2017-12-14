
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {name: 'Carrots', calories: 50},
        {name: 'Grapes', calories: 50},
        {name: 'Fritos', calories: 50},
        {name: 'rasberries', calories: 50},
        {name: 'cool cool', calories: 50},
        {name: 'spam', calories: 50},
        {name: 'sevvy elevvy', calories: 50}
      ])
    })
}
