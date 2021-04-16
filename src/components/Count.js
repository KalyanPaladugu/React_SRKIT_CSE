import React, { Component } from 'react'

export default class Count extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name :"Kalyan"
        }
    }
     render() {

        setTimeout(()=>{
             this.setState({name :"P.Kalyan"})
        },5000)
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
