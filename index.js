const server = require("./src/server");
const {database} = require("./src/db")

const port = process.env.PORT || 4000;

database.sync({alter: true}).then(()=>{
    server.listen(port, ()=>{
        console.log("Listening in port", port);
    });
});

