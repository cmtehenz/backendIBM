const getOne = ({ db }) => async(req, res) => {
  let id = req.params.id

  const animalDB = await db('animals').select().where('id', id)
  res.send(animalDB[0])
}

const get = ({ db }) => async(req, res) =>{
  const animals = await db('animals').select();
  res.send(animals);
}

module.exports = {
  get, getOne
}