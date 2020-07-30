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
      table.string('location') // in seconds
      table.timestamp('created') // utc
    })
  }
const vehiclesExist = await knex.schema.hasTable('vehicles')
  if (!vehiclesExist) {
    await knex.schema.createTable('vehicles', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('picture')
    })
  }
const dogsExist = await knex.schema.hasTable('dogs')
if (!dogsExist) {
  await knex.schema.createTable('dogs', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('picture')
  })
}

const totalDogs = await knex('dogs').select(knex.raw('count(*) as total'))
if(totalDogs[0].total === 0){
  await knex.insert({
    name: 'Aninha',
    picture: 'imagem.png',
  }).into('dogs')
  await knex.insert({
    name: 'Bob',
    picture: 'imagem.png',
  }).into('dogs')
  await knex.insert({
    name: 'Bebel',
    picture: 'imagem.png',
  }).into('dogs')
  await knex.insert({
    name: 'Belinha',
    picture: 'imagem.png',
  }).into('dogs')
  await knex.insert({
    name: 'Bento',
    picture: 'imagem.png',
  }).into('dogs')
  await knex.insert({
    name: 'Chico',
    picture: 'imagem.png',
  }).into('dogs')
  await knex.insert({
    name: 'Marcia',
    picture: 'imagem.png',
  }).into('dogs')

}

const totalVehicles = await knex('vehicles').select(knex.raw('count(*) as total'))
if(totalVehicles[0].total === 0){
  await knex.insert({
    name: 'ABTR – Auto Bomba Tanque Resgate',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'ABT – Auto Bomba Tanque',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'AA – Auto Ambulância',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'ABS – Auto Busca e Salvamento Defesa Civil',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'AA – Auto Ambulância',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'APC – Auto Posto de Comando',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'ATP – Auto Transporte de Pessoal',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'MAS – Moto Aquática de Salvamento',
    picture: 'imagem.png',
  }).into('vehicles')
  await knex.insert({
    name: 'RPA – Aeronave Remotamente Tripulada',
    picture: 'imagem.png',
  }).into('vehicles')
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