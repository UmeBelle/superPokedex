const express = require("express");
const app = express();
const pokemonRoute = require("./src/routes/pokemon");
const auth = require("./src/routes/auth");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = 4000;


app.get("/", (req, res) => {
    res.send("Hola")
})
app.post ('/registro', (req,res) =>{

} )
app.use("/auth", auth);
app.use("/pokemon", pokemonRoute);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`App running in port ${PORT}`))






