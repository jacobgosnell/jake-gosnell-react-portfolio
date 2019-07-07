import React, { Component } from 'react'
import axios from 'axios';

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItems: []
        }
    }

    getPortfolioItems() { // this function has to be called by a lifecycle hook
        axios.get("https://jake.devcamp.space/portfolio/portfolio_items", { 
            withCredentials: true 
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
                // use spread operator b/c we need all the portfolio items
                // to be split up into 12 different items
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
                        <h1>Portfolio sidebar....</h1>
                    </div>
                </div>
            </div>
        );
    }
}