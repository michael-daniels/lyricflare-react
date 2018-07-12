import React from 'react';


const SingleCard = (props) => {
  return (
    <div className="col-md-3">
      <div className="single-card">

        <div>
          <h4>{props.singlecard.title}</h4>
        </div>
          <div>
            <p>Lyrics here...</p>
        </div>

      </div>


    </div>
  )
}

export default SingleCard
