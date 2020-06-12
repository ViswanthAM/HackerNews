import React, { Component} from 'react';
import { withRouter } from 'react-router';
import { SiteHeader, SiteFooter } from './components'
import { Container } from 'semantic-ui-react';

export class HomeAppComponent extends Component{
    render(){
        const { children } = this.props;
        return (
            <div>
                <SiteHeader/>
                <div style = {{width:'60%'}}>
                    { children }
                </div>
                {/* <SiteFooter/> */}
            </div>
        );
    }
}

export const HomeApp = withRouter(HomeAppComponent);