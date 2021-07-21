import React from "react" ;


function Section(props) {    
  const tab = [] ;
  for (let i = 0; i < props.images.length; i++) {
      tab.push(
        <img src={props.images[i]} alt="Netfli TSC" />
        )
      
  }   
    return (
    <div className="cat_section">
      <strong>{props.category}</strong>  
      <p className="tab">{tab}</p>
    </div>
) ;
}

export default Section ;