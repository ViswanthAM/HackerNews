import React, { Component } from "react";
import { Table, Container } from 'semantic-ui-react'


export class News extends Component{
    render(){
        return (
            <Container text style={{ marginTop: '3em'}}>
                <Table compact = 'very' size='' style={{ width: 'inherit'}}>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell>Vote Count</Table.HeaderCell>
                        <Table.HeaderCell>UpVote</Table.HeaderCell>
                        <Table.HeaderCell>News Details</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                </Table>
            </Container>
        );
    }
}