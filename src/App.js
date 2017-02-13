import React, {Component} from 'react';
import './App.css';
import AppMenu from './Menu';
import TopMenu from './TopMenu';
import Body from './Body';
import {Button, Checkbox, Form, Container, Grid} from 'semantic-ui-react';
import '../node_modules/semantic-ui/dist/semantic.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <AppMenu />
                <div style={{marginLeft: "250px"}}>
                    <Grid columns={1} padded>
                        <Grid.Row style={{paddingTop: "0px", paddingBottom: "0px", }}>
                            <Container fluid>
                                <TopMenu/>
                            </Container>
                        </Grid.Row>
                        <Grid.Row>
                            <Container>
                                <Body />
                            </Container>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
