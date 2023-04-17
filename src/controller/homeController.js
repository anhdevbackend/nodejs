import connection from "../configs/connectDB";

let getHomepage = (req,res) => {
    // get data
let data = [];
connection.query(
    'SELECT * FROM `user`',
    function(err, results, fields) {
    results.map((row) => {
        data.push({
            id: row.ID,
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            address: row.address,
        });
      });
    return res.render('index.ejs',{dataUser: JSON.stringify(data)});

    }
    
  );
}
module.exports = {
    getHomepage
}