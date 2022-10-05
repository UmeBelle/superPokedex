import React from "react";
import { useState } from "react";
import "./FormPokemon.css"

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
    
    return(
        <div className="pokeFormPopup">
            <div className="formPopup">
                <button className="btnClosePopup" onClick={props.closePopup}>X</button>
                <input name="name" className="name" onChange={handleChange} >Name: </input> <br></br>
                <input name="id" type="number" className="id" onChange={handleChange} >ID: </input> <br></br>
                <input name="image" className="image" onChange={handleChange} >Image URL: </input> <br></br>
                <button name="typePoison" className="typePoison" onClick={handleChange}></button> <button name="typeGrass" className="typeGrass" onClick={handleChange}></button> <button name="typeFire" className="typeFire" onClick={handleChange}></button> <br></br>
                <button name="typeWater" className="typeWater" onClick={handleChange}></button> <button name="typeBug" className="typeBug" onClick={handleChange}></button> <button name="typeFlying" className="typeFlying" onClick={handleChange}></button> <br></br>
                <button name="typeGhost" className="typeGhost" onClick={handleChange}></button> <button name="typeNormal" className="typeNormal" onClick={handleChange}></button> <button name="typePhysichic" className="typePhsychic" onClick={handleChange}></button> <br></br>
                <button name="typeSteel" className="typeSteel" onClick={handleChange}></button> <button name="typeRock" className="typeRock" onClick={handleChange}></button> <button name="typeNone" className="typeNone" onClick={handleChange}></button> <br></br>
                <input type="number" name="weight" className="weight" onChange={handleChange} >Weight: </input> <br></br>
                <input type="number" name="weight" className="height" onChange={handleChange} >Height: </input> <br></br>
                <input className="ability1" name="ability1" onChange={handleChange} >Ability: </input> <br></br>
                <input className="ability2" name="ability2" onChange={handleChange} >Secondary ability: </input> <br></br>
                <input className="flavorText" name="flavorText" onChange={handleChange} >Info: </input> <br></br>
                <button className="randomStats" name="statsRandom" onClick={handleChange}>Random</button> <button className="chooseStats" name="statsFixed" onClick={handleChange}>Choose</button>
                <div className="stats">
                    <input type="number" className="hp" name="hp" onChange={handleChange} disabled={statsState}>HP: </input> 
                    <input type="number" className="atk" name="atk" onChange={handleChange} disabled={statsState}>ATK: </input> 
                    <input type="number" className="def" name="def" onChange={handleChange} disabled={statsState}>DEF: </input> <br></br>
                    <input type="number" className="satk" name="satk" onChange={handleChange} disabled={statsState}>sATK: </input> 
                    <input type="number" className="sdef" name="sdef" onChange={handleChange} disabled={statsState}>sDEF: </input> 
                    <input type="number" className="spe" name="spe" onChange={handleChange} disabled={statsState}>SPE: </input> <br></br>
                </div>
            </div>
        </div>
    )
}

export default PopupFormPokemon;