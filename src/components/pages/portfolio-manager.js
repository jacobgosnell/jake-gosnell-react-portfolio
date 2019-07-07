import React, { Component } from 'react'
import axios from 'axios';

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItems: []
        }
    }

<<<<<<< HEAD
    getPortfolioItems() { 
=======
    getPortfolioItems() { // this function has to be called by a lifecycle hook
>>>>>>> cbf0a82debfe91d5735063feac17370d7a294626
        axios.get("https://jake.devcamp.space/portfolio/portfolio_items", { 
            withCredentials: true 
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
<<<<<<< HEAD
=======
                // use spread operator b/c we need all the portfolio items
                // to be split up into 12 different items
>>>>>>> cbf0a82debfe91d5735063feac17370d7a294626
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