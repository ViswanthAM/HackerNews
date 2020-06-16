import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';


export class GraphComponent extends Component {
    render(){
        const { votes } = this.props;
        return (
            <LineChart 
                width={ window.innerWidth - 50 } 
                height={300} data={votes} 
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                layout="horizontal"
            >
                <XAxis dataKey="objectID" tickMargin={1} allowDataOverflow>
                    <Label value="ID" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis dataKey="votes">
                    <Label value="Votes" angle={-90} position="insideLeft" />
                </YAxis>
                <CartesianGrid stroke="#eee" strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="votes" stroke="#8884d8" label="Votes"/>
                <Tooltip />
            </LineChart>
        )
    }
}