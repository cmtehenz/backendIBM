const get = ({ db }) => async(req, res) =>{
  const missions = await db('missions').select();
  res.send(missions);
}

module.exports = {
  get,
}