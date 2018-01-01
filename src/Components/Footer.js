//React
import React from 'react';

const Footer = (props) => (
    <footer>
        <p>
            {props.infos.nom} - {props.infos.metier} - {props.infos.ville} - {props.infos.tel}
        </p>
    </footer>
);

export default Footer;