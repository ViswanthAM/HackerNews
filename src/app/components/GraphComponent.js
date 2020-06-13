import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';


export class GraphComponent extends Component {
    render(){
        const data = [{name:'Page A', uv:400}];
        return (
            <LineChart width= {400} height={400} data= {data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
            </LineChart>
        )
    }
}