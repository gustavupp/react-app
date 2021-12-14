import React, { useState } from "react";

const List = ({props}) => {
    console.log(props)
    return (
        <>
        {
        props.map((person)=> {
        // const { id, name, age, image } = person;
        return (
        <article key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
            </div>
            
        </article>
        )
        })
        }
        </>
    );
}

export default List;
