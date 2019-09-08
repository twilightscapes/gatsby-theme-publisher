import React from 'react';



const Sidebar = (props) => (
	<img src={props.twButton} alt="" />
	)

export default () => (
	    
    <aside id="section-aside">
    <h3>Todd Network</h3>
    <p>Visit other sites by Todd Lambert</p>
    <br />
    <br />
     <Sidebar
    twButton="/static/twilightscapes-button.jpg"
    />
    <br />
    <Sidebar
    twButton="/static/yearofnight-button.jpg"
    />
  

    
    </aside>
   
    
    

)




