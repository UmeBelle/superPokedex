import React from "react";
import { useState } from "react";
import "./FormPokemon.css"
import apiAddPoke from "../../api/ApiNewPokemon";

const PopupFormPokemon = (props) => {
    const [name, setName] = useState("");
    const [id, setID] = useState(0);
    const [image, setImage] = useState("");
    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [ability1, setAbility1] = useState("");
    const [ability2, setAbility2] = useState("");
    const [flavor, setFlavor] = useState("");
    const [hp, setHp] = useState(0);
    const [atk, setAtk] = useState(0);
    const [def, setDef] = useState(0);
    const [satk, setSatk] = useState(0);
    const [sdef, setSdef] = useState(0);
    const [spe, setSpe] = useState(0);
    const [statsState, setStatsState] = useState(false);

    const [types, setTypes] = useState([]);
    const [noTypes, setNoTypes] = useState(["poison", "water", "fire", "bug", "steel", "grass", "psychic", "normal", "ghost", "none", "rock", "flying"]);

    const rand = () =>{
        let number = parseInt(Math.random() * (91 - 60) + 60);
        return number;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        switch(name){
            case 'name':
                setName(value);
                break;
            case 'id':
                setID(value);
                break;
            case 'image':
                setImage(value);
                break;
            case 'weight':
                setWeight(value);
                break;
            case 'height':
                setHeight(value);
                break;
            case 'ability1':
                setAbility1(value);
            case 'ability2':
                setAbility2(value);
                break;
            case 'flavor':
                setFlavor(value);
                break;
            case 'statsRandom':
                setHp(rand());
                setAtk(rand());
                setDef(rand());
                setSatk(rand());
                setSdef(rand());
                setSpe(rand());
                setStatsState(true);
                break;
            case 'statsFixed':
                setStatsState(false);
                break;
            case 'hp':
                setHp(value);
                break;
            case 'atk':
                setAtk(value);
                break;
            case 'def':
                setDef(value);
                break;
            case 'satk':
                setSatk(value);
                break;
            case 'sdef':
                setSdef(value);
                break;
            case 'spe':
                setSpe(value);
                break;
            default:
                break;
        }
    }


    const blockButtons = (e) => {
        const done = noTypes.map((b) =>{
            switch(b){
                case e[0]:
                    console.log("noType name: " + b);
                    console.log("type1 name: " + e[0]);
                    setType1(e[1])
                    break;
                case e[1]:
                    console.log("noType name: " + b);
                    console.log("type2 name: " + e[1]);
                    setType2(e[1])
                    break;
                default:
                    console.log("noType name: " + b);
                    console.log("logica bad");
                    const button = document.getElementsByClassName(b);
                    button[0].disabled = true;
                    console.log("Se deshabilito el boton: " + b);
            }
        })
        console.log("type1 name: " + e[0]);
        console.log("type2 name: " + e[1]);
        return done;
    }

    const handleType = (e) => {
        console.log("Boton: " + e);
        const arr = types;
        console.log(arr);
        switch(types.length){
            case 0:
                console.log("array lenght: " + types.length)
                arr.push(e);
                setTypes(arr);
                break
            case 1:
                console.log("array lenght: " + types.length)
                arr.push(e);
                setTypes(arr);
                blockButtons(types);
                break
            }    
    }

    const sendNewPokemon = () => {
        const data ={ 
            name,
            id,
            image,
            type1,
            type2,
            weight,
            height,
            ability1,
            ability2,
            flavor,
            hp,
            atk,
            def,
            satk,
            sdef,
            spe
        }

        apiAddPoke(data);
    }    

    const [imagePoke, setImagePoke] = useState("./Img/Pokeball.png");

    const loadImage = () => {
        const imageInput = document.getElementsByClassName("image");
        console.log(imageInput);
        console.log(imageInput.value);
        setImagePoke(imageInput.value);
    }
    
    return(
        <div className="pokeFormPopup">
            <button className="btnClosePopup" onClick={props.closePopup}><h2> X </h2></button>
            
            <div className="formPopup">
                <div className="center-on-page">
                    <div className="pokeball">
                        
                        <div className="pokeball__button"></div>
                    </div>
                    
                </div>
                <form className="formPopupContent" onSubmit={sendNewPokemon}>
                <h1>Add a new pokemon</h1>
                
                    <div className="firstThree">
                    <h6>Name</h6><br></br> <input name="name" className="name" onChange={handleChange} required/> <br></br>
                    <h6>ID</h6><br></br> <input name="id" type="number" className="id" onChange={handleChange} required/> <br></br>
                    <h6>Image URL</h6><br></br><input name="image" className="image" onChange={handleChange} required/><button type="button" className="btnLoadImage" onClick={() => {loadImage()}}>Load</button> <br></br>                        
                    </div>
                    <div className="imagePokemon">
                        <img src={imagePoke} alt="[Pokemon Image not loaded]"/>
                    </div>
                    <div className="buttons">
                        <div>
                            <button type="button" name="typePoison" className="poison" onClick={() => {handleType("poison")}} disabled={false} required>Poison</button> <button type="button" name="typeGrass" className="grass" onClick={() => {handleType("grass")}} disabled={false} required>Grass</button> <button type="button" name="typeFire" className="fire" onClick={() => {handleType("fire")}} disabled={false} required>Fire</button>
                        </div> <br></br>
                        <div>
                            <button type="button" name="typeWater" className="water" onClick={() => {handleType("water")}} disabled={false} required>Water</button> <button type="button" name="typeBug" className="bug" onClick={() => {handleType("bug")}} disabled={false} required>Bug</button> <button type="button" name="typeFlying" className="flying" onClick={() => {handleType("flying")}} disabled={false} required>Flying</button>
                        </div> <br></br>
                        <div>
                            <button type="button" name="typeGhost" className="ghost" onClick={() => {handleType("ghost")}} disabled={false} required>Ghost</button> <button type="button" name="typeNormal" className="normal" onClick={() => {handleType("normal")}} disabled={false} required>Normal</button> <button type="button" name="typePsychic" className="psychic" onClick={() => {handleType("psychic")}} required>Psychic</button>
                        </div> <br></br>
                        <div>
                            <button type="button" name="typeSteel" className="steel" onClick={() => {handleType("steel")}} disabled={false} required>Steel</button> <button type="button" name="typeRock" className="rock" onClick={() => {handleType("rock")}} disabled={false} required>Rock</button> <button type="button" name="typeNone" className="none" onClick={() => {handleType("none")}} disabled={false} required>None</button>
                        </div>
                    </div>
                    <div className="secondThree">
                       <h2>Abouts</h2>
                    <h6>Weight</h6><br></br><input type="number" name="weight" className="weight" onChange={handleChange} required/> <br></br>
                    <h6>Height</h6><br></br><input type="number" name="height" className="height" onChange={handleChange} required/> <br></br>
                    <h6>Ability 1</h6><br></br> <input className="ability1" name="ability1" onChange={handleChange} required/> <br></br>
                    <h6>Ability 2</h6><br></br><input className="ability2" name="ability2" onChange={handleChange} required/> <br></br>
                    <h6>About</h6><br></br><input className="flavor" name="flavorText"  onChange={handleChange} required/> <br></br>
                    </div>
                    <div className="statbuttons">
                        
                    <h2>Stats:</h2>
                    <div className="botones">
                    <button type="button" className="randomStats" name="statsRandom" onClick={handleChange}>Random</button> 
                    <button type="button" className="chooseStats" name="statsFixed" onClick={handleChange}>Choose</button>
                    </div>
                    </div>
                    <div className="stats">
                        <h6>HP </h6><input type="number" className="hp" name="hp" onChange={handleChange} disabled={statsState} required/> <br></br>
                        <h6>ATK</h6><input type="number" className="atk" name="atk" onChange={handleChange} disabled={statsState} required/> <br></br>
                        <h6>DEF</h6><input type="number" className="def" name="def" onChange={handleChange} disabled={statsState} required/> <br></br>
                        <h6>SATK</h6><input type="number" className="satk" name="satk" onChange={handleChange} disabled={statsState} required/> <br></br>
                        <h6>SDEF</h6><input type="number" className="sdef" name="sdef" onChange={handleChange} disabled={statsState} required/><br></br>
                        <h6>SPE</h6><input type="number" className="spe" name="spe" onChange={handleChange} disabled={statsState} required/> <br></br>
                    </div>
                    <button className="add">Add</button>
                </form>
            </div>
        </div>
    )
}

export default PopupFormPokemon;