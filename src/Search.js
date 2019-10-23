import React, { Component } from 'react'
import RatingStars from './RatingStars'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            // star:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/220px-Five-pointed_star.svg.png"
           
        }
    }
    searchMovie=(event)=>{
       this.setState({
           searching:event.target.value
       })

        
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.props.search(e.target.value)} />
                <RatingStars rate={this.props.rate} handleStars={this.props.handleRate}/>
             

            </div>
        )
    }
}
