import React, { Component } from 'react'

export default class CorpBank extends Component {
    render(props) {
        return (
            <div>
                <h1>The Bank {this.props.name} is located @ {this.props.location}</h1>
            </div>
        )
    }
}
