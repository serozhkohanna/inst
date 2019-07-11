import React, { Component } from 'react';

import media from './ui/hocs/media/media.jsx';

import '../client/vendor';
import './css/main.css';

import MainPage from './ui/pages/MainPage/MainPage.jsx';
import PopUp from './ui/components/PopUp/PopUp.jsx';

import { Route, withRouter } from 'react-router-dom';

@media
class App extends Component {
    render () {
        return <main>
            <Route path='/' component={MainPage} />
            <Route path='/p/:post_id' component={PopUp} />
        </main>;
    }
}

export default withRouter(App);
