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
      table.string('description')
    })
  }
  // const runsExist = await knex.schema.hasTable('runs')
  // if (!runsExist) {
  //   await knex.schema.createTable('runs', table => {
  //     table.increments('id').primary()
  //     table.integer('user_id')
  //     table.string('friendly_name')
  //     table.integer('duration') // in seconds
  //     table.timestamp('created') // utc
  //     table.integer('distance') // meters
  //   })
  // }
  const totalUsers = await knex('users').select(knex.raw('count(*) as total'))
  if (totalUsers[0].total === 0) {
    await knex.insert({
      name: 'Daniel',
      email: 'admin@admin.com',
      picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg",
      description: "Lorem ipsum dolor sit amet",
    }).into('users')
    await knex.insert({
      name: 'Rasmus ras',
      email: 'teste@admin.com',
      picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg",
      description: "Lorem ipsum dolor sit amet",
    }).into('users')
  }
}
initDB()

module.exports = knex