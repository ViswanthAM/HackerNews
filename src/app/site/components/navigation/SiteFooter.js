import React, { Component } from "react";
import { Menu, List, Container } from 'semantic-ui-react';

export class SiteFooter extends Component{
    render(){
        return  <Container textAlign = 'center' fixed = 'bottom'>
            <List horizontal inverted divided size ='small'>
                <List.Item>Terms and conditions</List.Item>
            </List>
        </Container>
    }
}

{/* <Menu fixed = 'bottom' inverted height= '10px'>
            
            <List>
                <List.Item>Terms and conditions</List.Item>
            </List>
        </Menu> */}