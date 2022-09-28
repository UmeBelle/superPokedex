const express= require("express");
const app= express();
const pokemonRoute = require("./src/routes/pokemon");

const PORT= 4000;
app.get("/", (req,res)=>{
    res.send("Hola")
})

app.use("/pokemones", pokemonRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT,()=>console.log(`App running in ${PORT}`))






