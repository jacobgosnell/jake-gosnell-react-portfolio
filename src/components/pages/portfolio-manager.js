import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItems: []
        }
    }

    getPortfolioItems() { 
        axios.get("https://jake.devcamp.space/portfolio/portfolio_items", { 
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
                        <h1>Portfolio form.....</h1>
                    </div>

                    <div className="right-side">
                        <PortfolioSidebarList data={this.state.portfolioItems} />
                    </div>
                </div>
            </div>
        );
    }
}