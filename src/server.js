const app = require('./app')
require('./database/db')

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log('Server running...')
})