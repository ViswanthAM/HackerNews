import React,{ Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { find } from 'lodash';

export class TableComponentBuilder extends Component{

    getVoteDetails = item => {
        const { votes } = this.props;
        const vote = find( votes, ( vote ) => vote.objectID == item.objectID );
        return vote ? vote.votes : 0;
    }
    
    getNewsDetail = item => {
        return (
            <div>
                <h5>{item.title} <span  style={{fontWeight: 'lighter'}}>by </span> 
                <span style={{fontWeight: 'normal'}}>{item.author}</span>    
                <span onClick={()=>this.props.onNewsHide( item )} style={{fontWeight: 'lighter', textDecoration: 'underline', cursor:'pointer'}}>   [ hide ]</span></h5>
            </div>
        );
    } 

    getTableRow( rowType ){
        const { currentPageItem, votes } = this.props;
        let currentPageDetails = currentPageItem ? currentPageItem: [];
        switch( rowType ){
            case 'header':
                return (
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Comments</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Vote Count</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">UpVote</Table.HeaderCell>
                        <Table.HeaderCell>News Details</Table.HeaderCell>
                    </Table.Row>
                )
            case 'body':
                if(currentPageDetails){
                    const rowDetails = currentPageDetails.map( ( item, index ) => 
                        <Table.Row key = { item.objectID }>
                            <Table.Cell textAlign="center">{item.num_comments}</Table.Cell>
                            <Table.Cell textAlign="center">{this.getVoteDetails(item)}</Table.Cell>
                            <Table.Cell textAlign="center">
                                <i className='fas fa-caret-up' onClick={() => this.props.onVote( item )} style={{cursor:'pointer'}}></i>
                            </Table.Cell>
                            <Table.Cell>{this.getNewsDetail(item)}</Table.Cell>
                        </Table.Row> 
                    );
                    return rowDetails;
                }
                else{
                    return null;
                }
            default:
                return (
                    <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>Status</Table.Cell>
                        <Table.Cell>Notes</Table.Cell>
                    </Table.Row>
                )
        }
    }
    render(){
        const { onClickOfNextButton, onClickOfPreviousButton } = this.props;
        return (
        <div>
            <Table compact = 'very' style={{ width: '-webkit-fill-available'}}>
                <Table.Header>
                    {this.getTableRow( 'header' )}
                </Table.Header>
            
                <Table.Body>
                    {this.getTableRow( 'body' )}
                </Table.Body>
            </Table>
            <div style={{textAlignLast:"end",color:"orange"}}>
                <Button.Group>
                    <Button onClick={ onClickOfPreviousButton } color="orange">Previous</Button>
                    <Button onClick={ onClickOfNextButton } color="orange">Next</Button>
                </Button.Group>
            </div>
        </div>
        )
    }
}

export const TableComponent = TableComponentBuilder;