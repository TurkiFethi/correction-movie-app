import React, { Component } from 'react'
import './App.css';
import {tabListMovies} from '../src/data'
import ListCards from './ListCards';
import AddMovies from './AddMovie';
import Search from './Search';




export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tabListMovies:tabListMovies,
      search:'',
      rate:0
    }
     
    
  }
  add = newMovie => {
    this.setState({
      // tabListMovies: this.state.tabListMovies.concat(newMovie)
      tabListMovies: [...this.state.tabListMovies, newMovie]
    });
  };
  search=searchMovie=>{
    this.setState({
      search:searchMovie
      
    })
    
  }
  rate=(x)=>{
    this.setState({
      rate:x
    })
  }
   
  render() {
    
    
    return (
      <div>
        
        <Search search={this.search} handleRate={this.rate} rate={this.state.rate} />
        <ListCards tabListMovies={this.state.tabListMovies} rate={this.state.rate} searchName={this.state.search}/>
      
        <AddMovies Add={this.add}/>
        
      </div>
    )
  }
}

