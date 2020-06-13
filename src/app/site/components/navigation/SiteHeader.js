import React, { Component } from "react";
import { Menu, Container } from 'semantic-ui-react';

export class SiteHeader extends Component{
    render(){
        return <div>
            <Menu fixed='top' inverted color='orange'>
                <Container>
                    <Menu.Item header >
                        Hacker News
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    }
}