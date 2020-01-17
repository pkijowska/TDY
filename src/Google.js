import React from 'react';

import iconSet from "./selection.json";

import IcomoonReact, { iconList } from "icomoon-react";



const Google = () => {

return (

<form className="form-search" action="http://www.google.com/search" method="get">

<IcomoonReact className="form-search__icon" iconSet={iconSet} color="white" size={15} icon="magnifying-glass" />

<input className="form-search__input" type="text" name="q"/>

</form>

)

}



export default Google;
