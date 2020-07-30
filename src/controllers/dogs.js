const get = ({ db }) => async(req, res) =>{
  const dogs = await db('dogs').select();
  res.send(dogs);
}

module.exports = {
  get,
}