import "./abouts-component.css";
import React from "react";

const Porcentajes = ({ pokemon }) => {
  const item = pokemon;
  console.log(item);

  return (
    <section>
      <>
        <div className="card"
        style={{background: "whitesmoke"}}>
          <div className="skills">
            <p
              className={`skills-tech ${item.type1}`}
              style={{ background: "whitesmoke" }}
            >
              HP
            </p>
            <div className="container-porcentaje">
              <p>{item.hp}</p>

              <div className="container-skills-bar">
                <div
                  className={`skills-bar ${item.type1}`}
                  style={{ background: `${item.type1}` }}
                ></div>
                <div
                  id={item.type1}
                  className={`barra-porcentaje ${item.type1}`}
                  style={{ width: `${parseInt(item.hp)}px` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="skills">
            <p
              className={`skills-tech ${item.type1}`}
              style={{ background: "whitesmoke" }}
            >
              ATK
            </p>
            <div className="container-porcentaje">
              <p>{item.atk}</p>
              <div>
                <div>
                  <div
                    id={item.type1}
                    className={`barra-porcentaje ${item.type1}`}
                    style={{ width: `${parseInt(item.atk)}px` }}
                  ></div>
                  <div className={`skills-bar ${item.type1}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <p
              className={`skills-tech ${item.type1}`}
              style={{ background: "whitesmoke" }}
            >
              DEF
            </p>
            <div className="container-porcentaje">
              <p>{item.def}</p>
              <div>
                <div
                  id={item.type1}
                  className={`barra-porcentaje ${item.type1}`}
                  style={{ width: `${parseInt(item.def)}px` }}
                ></div>
                <div className={`skills-bar ${item.type1}`}></div>
              </div>
            </div>
          </div>
          <div className="skills">
            <p
              className={`skills-tech ${item.type1}`}
              style={{ background: "whitesmoke" }}
            >
              SATK
            </p>
            <div className="container-porcentaje">
              <p>{item.satk}</p>
              <div>
                <div
                  id={item.type1}
                  className={`barra-porcentaje ${item.type1}`}
                  style={{ width: `${parseInt(item.satk)}px` }}
                ></div>
                <div className={`skills-bar ${item.type1}`}></div>
              </div>
            </div>
          </div>
          <div className="skills">
            <p
              className={`skills-tech ${item.type1}`}
              style={{ background: "whitesmoke" }}
            >
              SDEF
            </p>
            <div className="container-porcentaje">
              <p>{item.sdef}</p>

              <div>
                <div
                  id={item.type1}
                  className={`barra-porcentaje ${item.type1}`}
                  style={{ width: `${parseInt(item.sdef)}px` }}
                ></div>
                <div className={`skills-bar ${item.type1}`}></div>
              </div>
            </div>
          </div>
          <div className="skills">
            <p
              className={`skills-tech ${item.type1}`}
              style={{ background: "whitesmoke" }}
            >
              SPD
            </p>
            <div className="container-porcentaje">
              <p>{item.spd}</p>
              <div>
                <div
                  id={item.type1}
                  className={`barra-porcentaje ${item.type1}`}
                  style={{ width: `${parseInt(item.spd)}px` }}
                ></div>
                <div className={`skills-bar ${item.type1}`}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Porcentajes;
