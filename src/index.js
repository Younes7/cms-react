//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import App from './Components/App';
import Admin from './Components/Admin';
import Loading from './Components/Loading';

//CSS
import 'sanitize.css';
import './index.css';

//PWA
import registerServiceWorker from './registerServiceWorker';

//React Router
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

//firebase
import * as firebase from 'firebase';
import config from './firebase';

class Root extends React.Component {
    constructor() {
        super()
        firebase.initializeApp(config);
        this.state = {
            loading: true
        };
    };

    componentWillMount() {
        const ref = firebase.database().ref('pierce');

        ref.on('value', snapshot => {
            this.setState({
                data: snapshot.val(),
                loading: false
            });
        });
    };

    render() {
        if (this.state.loading) {
            return <Loading />
        };

        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={render =>(
                        <App data={this.state.data} />
                    )} />
                    <Route exact path='/admin' component={render => (
                        <Admin data={this.state.data}/>
                    )} />
                </Switch>
            </Router>
        ); 
    };
};

ReactDOM.render( <Root />, document.getElementById('root'));
registerServiceWorker();
