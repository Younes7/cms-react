//React
import React from 'react';

//Components
import Header from './Header';
import Section from './Section';
import Maps from './Maps';
import Footer from './Footer';

const App = props => {
    const sections = Object
        .keys(props.data.sections)
        .map(key => (<Section key={key} details={props.data.sections[key]} />)
    );

    return (
        <div className="app">
            <Header infos={props.data.infos} />
            {sections}
            <Maps />
            <Footer infos={props.data.infos} />
        </div>
    );
}

export default App;