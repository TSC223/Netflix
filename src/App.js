import React from "react";
import "./App.css" ;
import Section from "./component/Section"
import data from "./data.json" ;



function App() {
  const tab = [    ] ;
  for (let i = 0; i < data.length; i++) {
    const name = data[i].category ;
    const movies = data[i].images ;
    tab.push(<Section category={name}  images={movies}/>) ;

  } 

  return(
    <>
    <div className="navigation">
    <h1 className="Netflix">Netflix</h1>
    <span className="la_nav">
    <a href="#Emissions">Emissions TV</a>
    <a href="#Séries">Séries françaises</a>
    <a href="#Comédies">Comédies</a>
    <a href="#Nouveautés">Nouveautés</a>
    <a href="#Documentaires">Documentaires</a>
    </span>
    <h5 className="tsc">TSCopyright</h5>
    </div>
    <div>{tab}</div>
  
    </>
  ) ;
}

export default App;
