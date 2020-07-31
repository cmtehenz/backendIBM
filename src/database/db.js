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
      table.integer('vehicle_id')
      table.integer('animal_id')
      table.integer('firefither_id')
      table.string('picture')
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
const animalsExist = await knex.schema.hasTable('animals')
if (!animalsExist) {
  await knex.schema.createTable('animals', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('picture')
    table.string('description')
  })
}

const totalAnimals = await knex('animals').select(knex.raw('count(*) as total'))
if(totalAnimals[0].total === 0){
  await knex.insert({
    name: 'Aninha',
    picture: 'https://images.dog.ceo/breeds/redbone/n02090379_2836.jpg',
    description: 'Sniffer dog'
  }).into('animals')
  await knex.insert({
    name: 'Bob',
    picture: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2706.jpg',
    description: 'Sniffer dog'
  }).into('animals')
  await knex.insert({
    name: 'Bebel',
    picture: 'https://images.dog.ceo/breeds/terrier-toy/n02087046_7191.jpg',
    description: 'Sniffer dog'
  }).into('animals')
  await knex.insert({
    name: 'Belinha',
    picture: 'https://images.dog.ceo/breeds/hound-walker/n02089867_2559.jpg',
    description: 'Sniffer dog'
  }).into('animals')
  await knex.insert({
    name: 'Bento',
    picture: 'https://images.dog.ceo/breeds/mix/cheyenne2.jpg',
    description: 'Sniffer dog'
  }).into('animals')
  await knex.insert({
    name: 'Chico',
    picture: 'https://images.dog.ceo/breeds/eskimo/n02109961_3956.jpg',
    description: 'Sniffer dog'
  }).into('animals')
  await knex.insert({
    name: 'Marcia',
    picture: 'https://images.dog.ceo/breeds/papillon/n02086910_4609.jpg',
    description: 'Sniffer dog'
  }).into('animals')

}

const totalVehicles = await knex('vehicles').select(knex.raw('count(*) as total'))
if(totalVehicles[0].total === 0){
  await knex.insert({
    name: 'ARTP - Auto Rescue Tank Pump',
    picture: 'https://static8.depositphotos.com/1396879/868/i/450/depositphotos_8687557-stock-photo-fire-truck.jpg',
  }).into('vehicles')
  await knex.insert({
    name: 'ATP - Auto Tank Pump',
    picture: 'https://g1.globo.com/platb/files/2128/2014/09/carro-bombeiros.jpg',
  }).into('vehicles')
  await knex.insert({
    name: 'ABS - Auto Search and Rescue Civil Defense',
    picture: 'https://www.itapema.sc.gov.br/wp-content/uploads/2019/06/IMG_4596-300x200.jpg',
  }).into('vehicles')
  await knex.insert({
    name: 'AA - Auto Ambulance',
    picture: 'https://i0.wp.com/quatis.rj.gov.br/wp-content/uploads/2019/11/P%C3%81G-8-2%C2%AA-FOTO.jpg?fit=1032%2C774&ssl=1',
  }).into('vehicles')
  await knex.insert({
    name: 'ACS - Auto Command Station',
    picture: 'https://i0.wp.com/quatis.rj.gov.br/wp-content/uploads/2019/11/P%C3%81G-8-2%C2%AA-FOTO.jpg?fit=1032%2C774&ssl=1',
  }).into('vehicles')
  await knex.insert({
    name: 'APT - Auto Personnel Transport',
    picture: 'https://i0.wp.com/quatis.rj.gov.br/wp-content/uploads/2019/11/P%C3%81G-8-2%C2%AA-FOTO.jpg?fit=1032%2C774&ssl=1',
  }).into('vehicles')
  await knex.insert({
    name: 'RW - Rescue Watercraft',
    picture: 'https://marineboats.com.br/website/wp-content/uploads/2019/01/zenit-400.png',
  }).into('vehicles')
  await knex.insert({
    name: 'RMA - Remotely Manned Aircraft',
    picture: 'https://lh3.googleusercontent.com/proxy/3BHnMkw9ZyPZL9yxGmLedd5A1d9xoE5PVxADH35z2MAdrOTUepRiwmJ7-aPZij8FRC0cqZmuTourlCtO9p-8TQCBnRoGeqhrBx_VW5SUY9p-sWN2Zk58Y5HzYQJtFMfVEJYRhJfcJgdZKYDCZul2-w',
  }).into('vehicles')
}

const totalMissions = await knex('missions').select(knex.raw('count(*) as total'))
if(totalMissions[0].total === 0){
  await knex.insert({
    name: 'Forest Fire',
    location: 'Av da Palmeiras',
    vehicle_id: 1,
    firefither_id: 1,
    animal_id: 3,
    picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',
    created: new Date()
  }).into('missions')
  await knex.insert({
    name: 'Residential Fire',
    location: 'Street Nossa senhora',
    vehicle_id: 4,
    firefither_id: 5,
    animal_id: 1,
    picture: 'https://jornal.usp.br/wp-content/uploads/20160620_00_radio-incendio.jpg',
    created: new Date()
  }).into('missions')
  await knex.insert({
    name: 'Animal rescue',
    location: 'Street Comendador - 20',
    vehicle_id: 2,
    firefither_id: 7,
    animal_id: 1, 
    picture: 'https://static.cdn.pleno.news/2017/08/2017-08-31_resgate_de_animais.jpg',
    created: new Date()
  }).into('missions')
}

const totalUsers = await knex('users').select(knex.raw('count(*) as total'))
  if (totalUsers[0].total === 0) {
    await knex.insert({
      name: 'John Smith',
      email: 'john@admin.com',
      picture: "https://f.i.uol.com.br/fotografia/2019/12/10/15759897045defb1c8718ae_1575989704_3x2_md.jpg",
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Bruce Lee',
      email: 'teste@admin.com',
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHr9IOrZoemGi3iFyDxS2jWvjvuGIky-LqIQ&usqp=CAU",
      //picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg",
      role: "Major",
    }).into('users')
    await knex.insert({
      name: 'Bruce Wayne',
      email: 'batman@exemplo.com',
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwDp9ijo7X9Iyv4XWoEf0LSVRHQI8ucI1p3g&usqp=CAU",      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Sharon Parker',
      email: 'shashapa@exemplo.com',
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAcRsihkkYI0TZoai7COLhWq75uoqXoyA-qA&usqp=CAU",      
      role: "Major",
    }).into('users')
    await knex.insert({
      name: 'Diana Prince',
      email: 'wonder@exemplo.com',
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOzS-OZpR6cIVgrQQ1xMSVwdFUU44AbXmWRQ&usqp=CAU",      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Paul R. Bush',
      email: 'paul@exemple.com',
      picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Laura M. Belk',
      email: 'laura@exemple.com',
      picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Trisha J. Kramer',
      email: 'trisha@exemple.com',
      picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Fritz C. Gutierrez',
      email: 'fritz@exemple.com',
      picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Isabel A. Murillo',
      email: 'isabel@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Donna K. Pedigo',
      email: 'donna@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Jeffrey L. Ford',
      email: 'jeffrey@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Edward H. McCoy',
      email: 'edward@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Valerie D. Miller',
      email: 'valerie@exemple.com',
      picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Robert D. Jackson',
      email: 'robert@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Jenniffer J. Penton',
      email: 'jenniffer@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Doris K. Johnson',
      email: 'doris@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Hang J. Smith',
      email: 'hang@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Juanita J. Bach',
      email: 'juanita@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Kevin S. Doyon',
      email: 'kevin@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Judy J. Fisher',
      email: 'judy@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
    await knex.insert({
      name: 'Hilton B. White',
      email: 'hilton@exemple.com',
       picture: 'https://static.poder360.com.br/2017/06/incendio.jpg',      
      role: "Sergeant",
    }).into('users')
  }
}
initDB()

module.exports = knex