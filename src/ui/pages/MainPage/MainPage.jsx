import React, { Component } from 'react';

import Description from '../../components/Description/Description.jsx';
import Points from '../../components/Points/Points.jsx';
import Header from '../../components/Header/Header.jsx';
import Body from '../../components/Body/Body.jsx';

class MainPage extends Component {
    render () {
        return <section>
          <Header />
          <Body />
        </section>;
    }
}

export default MainPage;
