import "./abouts-component.css"

import React from "react";

const Porcentajes = ({pokemon}) => {
  
  const item = pokemon
  console.log(item)

  return (
    <section>
    
      
          <>
            <div className="card">

              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo[0]}`}
                  style={{ background: "white" }}
                >
                  HP
                </p>
                <div className="container-porcentaje">
                  <p>{item.stats.hp}</p>
                  
                  <div className="container-skills-bar">
                    <div
                      className={`skills-bar ${item.tipo[0]}` }
                      style={{ background: `${item.tipo[0]}` }}
                    >
                    </div>
                      <div
                        className={`barra-porcentaje ${item.tipo[0]}`}
                        style={{ width: `${parseInt(item.stats.hp)}px` }}
                      ></div>
                  </div>

                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo[0]}`}
                  style={{ background: "white" }}
                >
                  ATK
                </p>
                <div className="container-porcentaje">
                  <p>{item.stats.atk}</p>
                  <div>

                <div>
                  <div
                    className={`barra-porcentaje ${item.tipo[0]}`}
                    style={{ width: `${parseInt(item.stats.atk)}px` }}
                    ></div>
                  <div className={`skills-bar ${item.tipo[0]}` }>
                  </div>
                </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo[0]}`}
                  style={{ background: "white" }}
                >
                  DEF
                </p>
                <div className="container-porcentaje">
                  <p>{item.stats.def}</p>
                  <div>
                    <div
                      className={`barra-porcentaje ${item.tipo[0]}`}
                      style={{ width: `${parseInt(item.stats.def)}px` }}
                    ></div>
                  <div className={`skills-bar ${item.tipo[0]}` }>
                  </div>
                  </div>
                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo[0]}`}
                  style={{ background: "white" }}
                >
                  SATK
                </p>
                <div className="container-porcentaje">
                  <p>{item.stats.satk}</p>
                <div>
                    <div
                      className={`barra-porcentaje ${item.tipo[0]}`}
                      style={{ width: `${parseInt(item.stats.satk)}px` }}
                    ></div>
                  <div className={`skills-bar ${item.tipo[0]}` }>
                  </div>

                </div>



                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo[0]}`}
                  style={{ background: "white" }}
                >
                  SDEF
                </p>
                <div className="container-porcentaje">
                  <p>{item.stats.sdef}</p>

                  <div>
                    <div
                      className={`barra-porcentaje ${item.tipo[0]}`}
                      style={{ width: `${parseInt(item.stats.sdef)}px` }}
                    ></div>
                  <div className={`skills-bar ${item.tipo[0]}` }>
                  </div>
                  </div>
                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo[0]}`}
                  style={{ background: "white" }}
                >
                  SPD
                </p>
                <div className="container-porcentaje">
                  <p>{item.stats.spd}</p>
                  <div>
                    <div
                      className={`barra-porcentaje ${item.tipo[0]}`}
                      style={{ width: `${parseInt(item.stats.spd)}px` }}
                    ></div>
                  <div className={`skills-bar ${item.tipo[0]}` }>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </>
    </section>
  );
};

export default Porcentajes