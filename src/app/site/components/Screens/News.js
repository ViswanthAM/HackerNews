import React, { Component } from "react";
import { Container, Divider } from 'semantic-ui-react'
import { TableComponent, GraphComponent } from '../../../components'
import { service } from '../../../services/service'
import { find } from 'lodash'

export class News extends Component{
    constructor( props ){
        super( props )
        this.state = {
            currentPage : 1,
            currentPageItem: null,
            votes:[]
        }
    }
    componentDidMount() {
        if( !localStorage.getItem("HiddenNews") ){
            localStorage.setItem( "HiddenNews", JSON.stringify([]));
        }

        if( !localStorage.getItem("Votes") ){
            localStorage.setItem( "Votes", JSON.stringify([]));
        }

        service( "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1" )
            .get().then(
                response => {
                    localStorage.setItem( response.data.page, JSON.stringify( response.data ) )
                    this.setState({currentPageItem:response.data.hits},
                        () => this.hideHiddenNews());
                }
            )
        this.setState({votes:JSON.parse(localStorage.getItem("Votes"))});
    }

    onClickOfNextButton = () => {
        const { currentPage } = this.state;
        const nextPage = currentPage + 1;
        if( !localStorage.getItem( nextPage ) ){
            service( `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${ nextPage }` )
            .get().then(
                response => {
                    localStorage.setItem( response.data.page, JSON.stringify( response.data ) )
                    this.setState({ currentPage: nextPage, currentPageItem:response.data.hits },
                        () => this.hideHiddenNews());
                }
            )
        }
        else{
            this.setState({ currentPage: nextPage, currentPageItem:JSON.parse(localStorage.getItem( nextPage )).hits },
            () => this.hideHiddenNews());
        }
    }

    onClickOfPreviousButton = () => {
        const { currentPage } = this.state;
        const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1 ;
        if( !localStorage.getItem( prevPage ) ){
            service( `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${ prevPage }` )
            .get().then(
                response => {
                    localStorage.setItem( response.data.page, JSON.stringify( response.data ) )
                    this.setState({ currentPage: prevPage, currentPageItem:response.data.hits },
                        () => this.hideHiddenNews());
                }
            ) 
        }
        else{
            this.setState({ currentPage: prevPage, currentPageItem: JSON.parse(localStorage.getItem( prevPage )).hits },
            () => this.hideHiddenNews());
        }
    }

    onNewsHide = item => {
        let hiddenNews = JSON.parse( localStorage.getItem("HiddenNews") );
        hiddenNews.push( item.objectID );
        localStorage.setItem( "HiddenNews", JSON.stringify( hiddenNews ));
        let currentPageDetails = [];
        this.state.currentPageItem.map((item, index ) => {
            if(hiddenNews.indexOf( item.objectID ) == -1 ){
                currentPageDetails.push(item);
            }
        });
        this.setState({currentPageItem: currentPageDetails})
    }

    onVote = item => {
        let upVote = JSON.parse( localStorage.getItem("Votes") );
        const voteAvailability = find( upVote, ( vote ) => vote.objectID == item.objectID );
        if( !voteAvailability ){
            upVote.push( {
                objectID : item.objectID,
                votes : 1
            } );
        }
        else{
            upVote.forEach(element => {
                if( element.objectID == item.objectID ){
                    element.votes += 1;
                }
            });
        }

        localStorage.setItem( "Votes", JSON.stringify( upVote ));
        this.setState({ votes: upVote });
    }

    hideHiddenNews = () => {
        if( localStorage.getItem("HiddenNews") ){
            let hiddenNews = JSON.parse( localStorage.getItem("HiddenNews") );
            let currentPageDetails = [];
            {
                this.state.currentPageItem &&
                this.state.currentPageItem.map((item, index )=>{
                    if(hiddenNews.indexOf( item.objectID ) == -1 ){
                        currentPageDetails.push(item);
                    }
                });
            }
            this.setState({currentPageItem: currentPageDetails})
        }
    }
    
    render(){
        const { currentPage, currentPageItem, votes } = this.state;
        return (
            <div>
                <div style={{ marginTop: '5em'}}>
                    <TableComponent 
                        currentPage = { currentPage }
                        currentPageItem = { currentPageItem }
                        onClickOfNextButton = { this.onClickOfNextButton }
                        onClickOfPreviousButton = { this.onClickOfPreviousButton }
                        onNewsHide = { this.onNewsHide }
                        onVote = { this.onVote }
                        votes = { votes }
                    />
                </div>
                <Divider inverted section  />
                <GraphComponent 
                    votes = { votes }
                />
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