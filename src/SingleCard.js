import React from 'react';


const SingleCard = (props) => {
  return (
    <div className="col-md-4 single-card">
      <div>
        <img className="card-img" src={props.singlecard.img} />
      </div>
      <div>
        <h4>{props.singlecard.title}</h4>
      </div>
    </div>
  )
}

export default SingleCard
