import React, {Component} from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import '../node_modules/semantic-ui/dist/semantic.min.css';

class AppMenu extends Component {
    handleItemClick = (name) => this.setState({ activeItem: name });

    render() {
        const {activeItem} = this.state || {};
        return (
            <Menu vertical fixed="left" style={{width: "250px"}} inverted>
                <Menu.Item>
                    <div>
                        <Icon name='home' size='huge' />
                        <strong>Project Name</strong>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Specification</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name='enterprise' active={activeItem === 'enterprise'} onClick={this.handleItemClick} />
                        <Menu.Item name='need' active={activeItem === 'need'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Releases</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name='alpha' active={activeItem === 'alpha'} onClick={this.handleItemClick} />
                        <Menu.Item name='beta' active={activeItem === 'beta'} onClick={this.handleItemClick} />
                        <Menu.Item name='v1.0.0' active={activeItem === 'v1.0.0'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Bugs</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name='open' active={activeItem === 'open'} onClick={this.handleItemClick} />
                        <Menu.Item name='resolved' active={activeItem === 'resolved'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        );
    }
}

export default AppMenu;
