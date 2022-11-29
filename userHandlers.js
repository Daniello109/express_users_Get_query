const database = require("./database");



const getUsers = (req, res) => {
  let sql = "select * from users";
  const sqlValues = [];

if (req.query.language != null) {
  sql += " where language = ?";
  sqlValues.push(req.query.language);

  if (req.query.city != null) {
    sql += " and city = ?";
    sqlValues.push(req.query.city);
  }
} else if (req.query.city != null) {
  sql += " where city = ?";
  sqlValues.push(req.query.city);
}
    
  database
  .query(sql, sqlValues)
  .then(([users]) => {
    if (users != null) {
      res.json(users);
      } else {
      res.status(200).send("Not Found");
      }

})
.catch((err) => {
  console.error(err);
  res.status(500).send("Error retrieving data from database");
});
};
 


const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    database
      .query("select * from users where id = ?", [id])
      .then(([users]) => {
        if (users[0] != null) {
            res.status(200).send(res.json(users[0]));
        } else {
          res.status(404).send("Not Found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      });
    }

module.exports = {
 
  getUsers,
  getUserById,
}

