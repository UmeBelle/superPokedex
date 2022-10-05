import React from "react";
import { useState } from "react";
import "./FormPokemon.css"
import api from "../../api/Api";

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

    const rand = () =>{
        return Math.random() * (91 - 60) + 60;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        switch(name){
            case 'name':
                setName(value);
            case 'id':
                setID(value);
            case 'image':
                setImage(value);
            case 'type1':
                setType1(value);
            case 'type2':
                setType2(value);
            case 'weight':
                setWeight(value);
            case 'height':
                setHeight(value);
            case 'ability1':
                setAbility1(value);
            case 'ability2':
                setAbility2(value);
            case 'flavor':
                setFlavor(value);
            case 'statsRandom':
                setHp(rand());
                setAtk(rand());
                setDef(rand());
                setSatk(rand());
                setSdef(rand());
                setSpe(rand());
                setStatsState(true);
            case 'statsFixed':
                setStatsState(false);
            case 'hp':
                setHp(value);
            case 'atk':
                setAtk(value);
            case 'def':
                setDef(value);
            case 'satk':
                setSatk(value);
            case 'sdef':
                setSdef(value);
            case 'spe':
                setSpe(value);
            default:
                return;
        }
    }

    const sendNewPokemon = () => {
        const url = "/pokemon/pokedex";
        return api.post(url)
            .then((res) => {
                console.log('respuesta ' + res)
                
            })
            .catch((error) => {
                alert(error)
            })
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
                    Name: <input name="name" className="name" onChange={handleChange} /> <br></br>
                    ID: <input name="id" type="number" className="id" onChange={handleChange} /> <br></br>
                    Image URL:<input name="image" className="image" onChange={handleChange} /> <br></br>
                    <div className="buttons">
                        <div>
                            <button name="typePoison" className="poison" onClick={handleChange}>Poison</button> <button name="typeGrass" className="grass" onClick={handleChange}>Grass</button> <button name="typeFire" className="fire" onClick={handleChange}>Fire</button>
                        </div> <br></br>
                        <div>
                            <button name="typeWater" className="water" onClick={handleChange}>Water</button> <button name="typeBug" className="bug" onClick={handleChange}>Bug</button> <button name="typeFlying" className="flying" onClick={handleChange}>Flying</button>
                        </div> <br></br>
                        <div>
                            <button name="typeGhost" className="ghost" onClick={handleChange}>Ghost</button> <button name="typeNormal" className="normal" onClick={handleChange}>Normal</button> <button name="typePhsychic" className="psychic" onClick={handleChange}>Phsychic</button>
                        </div> <br></br>
                        <div>
                            <button name="typeSteel" className="steel" onClick={handleChange}>Steel</button> 
                            <button name="typeRock" className="rock" onClick={handleChange}>Rock</button> 
                            <button name="typeNone" className="none" onClick={handleChange}>None</button>
                        </div>
                    </div>
                    
                    Weight: <input type="number" name="weight" className="weight" onChange={handleChange} /> <br></br>
                    Height: <input type="number" name="height" className="height" onChange={handleChange} /> <br></br>
                    Ability 1: <input className="ability1" name="ability1" onChange={handleChange} /> <br></br>
                    Ability 2:<input className="ability2" name="ability2" onChange={handleChange} /> <br></br>
                    About: <input className="flavorText" name="flavorText" onChange={handleChange} /> <br></br>
                    <h2>Stats:</h2>
                    <button className="randomStats" name="statsRandom" onClick={handleChange}>Random</button> 
                    <button className="chooseStats" name="statsFixed" onClick={handleChange}>Choose</button>
                    <div className="stats">
                        <input type="number" className="hp" name="hp" onChange={handleChange} disabled={statsState}/> 
                        <input type="number" className="atk" name="atk" onChange={handleChange} disabled={statsState}/> 
                        <input type="number" className="def" name="def" onChange={handleChange} disabled={statsState}/> <br></br>
                        <input type="number" className="satk" name="satk" onChange={handleChange} disabled={statsState}/> 
                        <input type="number" className="sdef" name="sdef" onChange={handleChange} disabled={statsState}/>
                        <input type="number" className="spe" name="spe" onChange={handleChange} disabled={statsState}/> <br></br>
                    </div>
                    <submit>Add</submit>
                </form>
            </div>
        </div>
    )
}

export default PopupFormPokemon;