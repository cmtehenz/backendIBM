const getOne = ({ db }) => async(req, res) => {
  const { id }  = req.params
  const missionDB = await db('missions').select().where('id', id)
  const firefither = await db('users').select().where('id', missionDB[0].firefither_id )
  
  const result = 
    [
      {
        id: firefither[0].id,
        name: firefither[0].name,
        email: firefither[0].email,
        picture: firefither[0].picture,
        role: firefither[0].role,
      },
      {
        id: 4,
        name: "Sharon Parker",
        email: "shashapa@exemplo.com",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAcRsihkkYI0TZoai7COLhWq75uoqXoyA-qA&usqp=CAU",
        role: "Major"
      },
      {

        id: 2,
        name: "Bruce Lee",
        email: "teste@admin.com",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHr9IOrZoemGi3iFyDxS2jWvjvuGIky-LqIQ&usqp=CAU",
        role: "Major"
      },
      
    ]
 
  res.send(result)
}


const get = ({ db }) => async(req, res) =>{
  const missions = await db('missions').select();
  res.send(missions);
}

module.exports = {
  get, getOne
}