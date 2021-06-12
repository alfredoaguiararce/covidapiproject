const express =  require("express");
const app = express();
const data = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/",(req, res) => {
    // Se imprimira en la aplicacion
    res.send("Covid API, by Alfredo Aguiar Arce , alfredoaguiararce@gmail.com");
});

app.get("/data",(req, res) =>{
    // Aqui se muestran los datos del API
    res.send(data);
});

app.listen(port, () => {
    console.log('Console app is listening on port http://localhost:' + port);
});