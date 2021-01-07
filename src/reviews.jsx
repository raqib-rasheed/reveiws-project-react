import React from 'react'
import {names,text} from "./utils/utils"
import {users} from "./utils/users"

export default function Reviews() {
  let [index,setIndex]=React.useState(0)
  const randomIndex = Math.round(Math.random()*6)
  function handleClick(event){
    if(index<0){
      setIndex(6)
    }if(index>6){
      setIndex(0)
    }
    if(index <7 && index >= 0){
      console.log(event.target.name)
      event.target.name === 'prev' ? setIndex(index--) : event.target.name==='next'? setIndex(index++):setIndex(randomIndex)
    }
  }
  
  return (
  <div className="card mt-5 border border-3 border-grey" id="card">
    <div className=" d-flex justify-content-center">
      <img className="border border-2 border-dark" src={users[index]} alt="..."></img>
    </div>
  <div className="card-body d-flex-column">
    <h5 className="card-title text-center">{names[index]}</h5>
    <p className="card-text">{text[index]}</p>
    <div className="d-flex justify-content-center">
    
    <button 
    onClick={handleClick}
    name="prev" 
    className="btn mx-1 btn-outline-dark">Prev</button>
    
    <button 
    onClick={handleClick}
    name="random" 
    className="btn mx-1 btn-outline-dark">Random</button>
    
    <button 
    onClick={handleClick}
    name="next" 
    className="btn mx-1 btn-outline-dark">Next</button>
    </div>
  </div>
</div>
  )
}
