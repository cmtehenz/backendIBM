const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  }
})

const initDB = async() => {
  const usersExist = await knex.schema.hasTable('users')
  if (!usersExist) {
    await knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.string('picture')
      table.string('role')
    })
  }
const missionsExist = await knex.schema.hasTable('missions')
  if (!missionsExist) {
    await knex.schema.createTable('missions', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('location') // in seconds
      table.timestamp('created') // utc
    })
  }
const totalMissions = await knex('missions').select(knex.raw('count(*) as total'))
if(totalMissions[0].total === 0){
  await knex.insert({
    name: 'Incêndio - Florestal',
    location: 'Avenida da Palmeiras',
  }).into('missions')
  await knex.insert({
    name: 'Incendio - Residencial',
    location: 'Rua Nossa senhora',
  }).into('missions')
  await knex.insert({
    name: 'Resgate Animal',
    location: 'Rua Comendador - 20', 
  }).into('missions')
}

const totalUsers = await knex('users').select(knex.raw('count(*) as total'))
  if (totalUsers[0].total === 0) {
    await knex.insert({
      name: 'Daniel',
      email: 'admin@admin.com',
      picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg",
      role: "sargento",
    }).into('users')
    await knex.insert({
      name: 'Rasmus ras',
      email: 'teste@admin.com',
      picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg",
      role: "Major",
    }).into('users')
  }
}
initDB()

module.exports = knex