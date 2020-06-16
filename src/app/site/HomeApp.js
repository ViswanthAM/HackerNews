import React, { Component} from 'react';
import { withRouter } from 'react-router';
import { SiteHeader } from './components'

export class HomeAppComponent extends Component{
    render(){
        const { children } = this.props;
        return (
            <div>
                <SiteHeader/>
                <div style = {{width:'100%'}}>
                    { children }
                </div>
                {/* <SiteFooter/> */}
            </div>
        );
    }
}

export const HomeApp = withRouter(HomeAppComponent);