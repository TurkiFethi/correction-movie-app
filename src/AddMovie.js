import React, { Component } from "react";

export default class AddMovies extends Component {
  constructor(props){
    super(props)
    this.state={
      rating:'',
      movieImage:'',
      movieName:'',
      movieType:'',
      movieDuration:''

    }
  }

  handleChange=(event)=>{
  
  
    this.setState({
      [event.target.name]:event.target.value
    })

  }
  // editDate=(event)=>{
  //   const re =/[^0-9]/gi
  //   if (!event.target.value.match(re) && event.target.value.length <= 4 && event.target.value.slice(0, 1) >=1 && event.target.value.slice(0, 1) <=2) {
  //     this.setState({
  //       movieDuration:event.target.value
        
  //     })
  //     console.log(this.state.movieDuration)
  
  //   }
  // }

 

  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Film
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">

                    <input type="text" placeholder="insert rating" onChange={this.handleChange} name="rating" value={this.state.rating}/>
                    <input type="text" placeholder="insert image movie" onChange={this.handleChange} name="movieImage" value={this.state.movieImage}/>
                    <input type="text" placeholder="insert title " onChange={this.handleChange} name="movieName" value={this.state.movieName}/>
                    <input type="text" placeholder="insert duration " onChange={this.handleChange} name="movieDuration" value={this.state.movieDuration}/>
                    <input type="text" placeholder="insert description" onChange={this.handleChange} name="movieType" value={this.state.movieType}/>

                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
             
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=>this.props.Add(this.state)}>
                  Add Film
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
