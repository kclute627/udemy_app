import React from 'react';
import classes from  './Person.css';




const person = (props)=>{
    const style = {
        '@media (min-width: 500px)': {
            width: '400px',
        }
    }
    const randomAge = Math.floor(Math.random()*30);

   
   
   
    return (
        
        <div className={classes.Person} >
            <p onClick={props.click}>Im {props.name} and I'm {props.age} years old!</p>
            <p >{props.children}</p>
            <input
            type="text"
            onChange={props.changed}
            value={props.name}/>

        </div>
    
    )
};



export default person;