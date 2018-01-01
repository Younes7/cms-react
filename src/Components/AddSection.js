//React
import React from 'react';

//Firebase
import * as firebase from 'firebase';

class AddSection extends React.Component {
    state = {
        data: {
            content: 'Entrez votre texte...'
        }
    };
    
    handleChange = event => {
        const data = { ...this.state.data };
        data.content = event.target.value;
        this.setState({ data });
    };

    handleClick = event => {
        firebase.database().ref('pierce/sections')
        .push({...this.state.data})
        this.setState({
            data:{
                 content:'Entrez votre texte...'
            }
        });
    };

    render() {
        return (
            <section>
                <textarea
                    rows="10"
                    value={this.state.data.content}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Ajouter une section</button>
            </section>
        );
    };
};

export default AddSection;