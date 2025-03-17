const sequelize = require ('sequelize')

let bdd = new sequelize ("pagination", "root","",{
    dialect: "mysql",
    host: "localhost"
});
let connect = async () =>{
    try{
        await bdd.authenticate();
        console.log('connection has been established successfully');
    }catch(error){
        console.error('unable to connect to the database', error);
    }
}
module.exports = {connect,bdd};
