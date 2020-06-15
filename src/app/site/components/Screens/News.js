import React, { Component } from "react";
import { Container } from 'semantic-ui-react'
import { TableComponent, GraphComponent } from '../../../components'
import { service } from '../../../services/service'

export class News extends Component{
    componentDidMount(){
        const output = service( "https://hn.algolia.com/api/v1/search_by_date?tags=story" )
            .get().then(
                response => console.log( response )
            )
    }
    render(){
        return (
            <div>
                <Container text style={{ marginTop: '3em'}}>
                    <TableComponent />
                </Container>
                <Container text style={{ marginTop: '2em'}}>
                    <GraphComponent />
                </Container>
            </div>
        );
    }
}

{/* <Table compact = 'very' style={{ width: 'inherit'}}>
<Table.Header>
<Table.Row>
    <Table.HeaderCell>Comments</Table.HeaderCell>
    <Table.HeaderCell>Vote Count</Table.HeaderCell>
    <Table.HeaderCell>UpVote</Table.HeaderCell>
    <Table.HeaderCell>News Details</Table.HeaderCell>
</Table.Row>
</Table.Header>
</Table> */}