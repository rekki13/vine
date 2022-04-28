import React, {Component} from 'react';
import {Hero, Info} from "./sections";

class Home extends Component {
    render() {
        return [
            <Hero/>,
            <Info/>
        ];
    }
}

export default Home;