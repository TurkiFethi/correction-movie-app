import React from 'react';
const RatingStars =(props)=>{
  
   
       
        let tabRate=[]
        for (let i=0;i<5;i++){
            props.rate>i?
            tabRate.push(<span onClick={()=>props.handleStars(i!==0?i+1:i)}>★</span>):
            tabRate.push(<span onClick={()=>props.handleStars(i+1)}>☆</span>)

        }
        return(
           <div>{tabRate}</div>
        )
    }
    export default RatingStars