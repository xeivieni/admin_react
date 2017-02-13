import React, {Component} from 'react';
import {Menu, Image, Icon} from 'semantic-ui-react';
import '../node_modules/semantic-ui/dist/semantic.min.css';

class TopMenu extends Component {
    render() {
        return (
            <Menu pointing secondary>
                <Menu.Item header>Our Company</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='logout' onClick={this.handleItemClick}>
                        <Image src='http://1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png' avatar />
                        <span>John Doe</span>
                        <span><Icon name="caret down"></Icon></span>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default TopMenu;
