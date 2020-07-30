const get = ({ db }) => async(req, res) =>{
  const vehicles = await db('vehicles').select();
  res.send(vehicles);
}

module.exports = {
  get,
}