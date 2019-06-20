import React, { Component } from 'react';

import media from './ui/hocs/media/media.jsx';

import '../client/vendor';
import './css/main.css';

import MainPage from './ui/pages/MainPage/MainPage.jsx';
import Linked from './ui/components/Content/Linked.jsx';
import Posts from './ui/components/Content/Posts.jsx';
import Tagged from './ui/components/Content/Tagged.jsx';
import PopUp from './ui/components/Content/PopUp.jsx';

import { Switch, Route, withRouter } from 'react-router-dom';

@media
class App extends Component {
    render () {
        return <main>
                <Route path='/' component={MainPage} />
                <Route path='/' component={Linked} />
                <Route path='/' component={Posts} />
                <Route exact path='/tagged/' component={Tagged} />
                <Route exact path='/p/:post_id' component={PopUp} />
            </main>;
    }
}

export default withRouter(App);
