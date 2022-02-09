import React, { Component } from 'react';
import { Container, Card } from 'reactstrap';

import { Registion } from './components/Registion';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className="w-100 p-5 gradient-custom-2">
                <Container>
                    <div className="card">
                        <Registion> </Registion>
                    </div>
                </Container>
            </div>
        );
    }
}
