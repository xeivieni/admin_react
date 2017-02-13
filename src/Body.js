/**
 * Created by clicrdv on 13/02/17.
 */

import React, {Component} from 'react';
import {Grid, Segment, Label, Icon, Image} from 'semantic-ui-react';
// import DoughnutChart from "react-chart.js";
import '../node_modules/semantic-ui/dist/semantic.min.css';

class AppMenu extends Component {

    render() {

        return (
            <Grid columns={4}>
                <Grid.Column>
                    <Segment padded>
                        <Label attached='top'>Releases</Label>
                        <Grid columns={2}>
                            <Grid.Column width="5">
                                <Icon name='tags' size='huge' />
                            </Grid.Column>
                            <Grid.Column width="7">
                                {/*<DoughnutChart width="600" height="250"/>*/}
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment padded>
                        <Label attached='top'>Features</Label>
                        <Grid columns={2}>
                            <Grid.Column width="5">
                                <Icon name='rocket' size='huge' />
                            </Grid.Column>
                            <Grid.Column width="7">
                                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment padded>
                        <Label attached='top'>Bugs</Label>
                        <Grid columns={2}>
                            <Grid.Column width="5">
                                <Icon name='bug' size='huge' />
                            </Grid.Column>
                            <Grid.Column width="7">
                                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment padded>
                        <Label attached='top'>Price</Label>
                        <Grid columns={2}>
                            <Grid.Column width="5">
                                <Icon name='cart' size='huge' />
                            </Grid.Column>
                            <Grid.Column width="7">
                                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default AppMenu;
