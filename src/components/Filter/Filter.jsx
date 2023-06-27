import React from "react";

export const Filter = ( { filterName } ) => (
    <div className="contacts-filter">
        <h3>Find contacts by name:</h3>
        <input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            onChange={filterName}
        />
    </div>   
);