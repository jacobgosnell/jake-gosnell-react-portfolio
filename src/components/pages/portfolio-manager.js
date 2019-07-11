import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(portfolioItem) {
        console.log("handleDeleteClick", portfolioItem);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
        console.log("handleSuccessfulFormSubmission", portfolioItem);
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error);
    }
    
    getPortfolioItems() { 
        axios.get("https://jake.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { 
            withCredentials: true 
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error in getPortfolioItems", error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    componentDidMount
    render() {
        return (
            <div>
                <div className="portfolio-page-wrapper">
                    <div className="left-side">
                        <PortfolioForm 
                          handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                          handleFormSubmissionError={this.handleFormSubmissionError}
                        />
                    </div>

                    <div className="right-side">
                        <PortfolioSidebarList 
                          data={this.state.portfolioItems} 
                          handleDeleteClick={this.handleDeleteClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}