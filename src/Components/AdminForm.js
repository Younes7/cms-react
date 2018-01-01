//React
import React from 'react';

//Firebase
import * as firebase from 'firebase';

class AdminForm extends React.Component {
    constructor(props) {
        super(props) 
            const data = this.props.data
            this.state = { data }
    };

    componentDidUpdate () {
        this.updateContent()
    };

    updateContent = () => {
        firebase.database().ref(`pierce/sections/${this.props.id}`)
        .set({...this.state.data});
    };
       
    handleChange = event => {
        const data = {...this.state.data};
        data.content = event.target.value;
        this.setState({ data })
    };   

    render() {
        return (
            <section>
                <textarea
                rows="10"
                value={this.state.data.content}
                onChange={this.handleChange}
                />
            </section>
        );
    };
};

export default AdminForm;