//React
import React from 'react';

const Header = (props) => (
    <header>
        <h1>{props.infos.nom}</h1>
        <h2>{props.infos.ville} - <a href={`tel:${props.infos.tel}`}>{props.infos.tel}</a></h2>
    </header>
);

export default Header;
 