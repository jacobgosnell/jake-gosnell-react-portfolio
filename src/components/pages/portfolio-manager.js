import React, { Component } from 'react'

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

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