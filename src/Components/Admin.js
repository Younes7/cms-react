//React
import React from 'react';

//Components
import AdminForm from './AdminForm';
import AddSection from './AddSection';

//Firebase
import * as firebase from 'firebase';

class Admin extends React.Component {
    //admin firebase
    state = {
        uid: null,
        owner: null
    };

    componentDidMount() {
        const user = firebase.auth().currentUser
        if (user) {
            this.authHandler(user)
        };
    };

    authenticate = event => {
        event.preventDefault()
        console.log(this.mail.value, this.password.value)
        firebase.auth().signInWithEmailAndPassword(this.mail.value, this.password.value)
        .then(user => this.authHandler(user) );
    };
    
    authHandler = user => {
        const ref = firebase.database().ref('pierce/owner')
        ref.on('value', snapshot=>{
            this.setState({
                uid: user.uid,
                owner: snapshot.val()
            });
        });
    };

    logOut = () => {
        firebase.auth().signOut().then(this.setState({uid:null}))
    };

    renderLogin = () => (
        <div className="app">
            <header>
                <h1>Administration</h1>
            </header>
            <section>
                <form onSubmit={this.authenticate}>
                    <input placeholder="Mail" type="email" ref={input => this.mail = input} />
                    <input placeholder="mot de passe" type="password" ref={input => this.password = input} />
                    <button type="submit">Se connecter</button>
                </form>
            </section>
        </div>
    );

    render() {
        // si pas de connexion
        if(!this.state.uid) {
            return this.renderLogin()
        }

        if(this.state.uid !== this.state.owner){
            return this.renderLogin()
        }

        const form = Object.keys(this.props.data.sections).map(key =>(
            <AdminForm key={key} id={key} data={this.props.data.sections[key]}/>
        ))

        return (
            <div className="app">
                <header>
                    <h1>Administration</h1>
                </header>
                {form}
                <AddSection />
                <footer>
                    <button onClick={this.logOut}>Se déconnecter</button>
                </footer>
            </div>
        );
    };
};

export default Admin;
