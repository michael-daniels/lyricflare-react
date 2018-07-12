import React from 'react';


const SingleCard = (props) => {
  let slicedTitle = props.singlecard.title
  if (props.singlecard.title.length > 15) {
    slicedTitle = props.singlecard.title.slice(0, 15) + '...'
  }
  return (
    <div className="col-md-3">
      <div className="single-card">

        <div>
          <h4>{slicedTitle}</h4>
        </div>
          <div>
            <p>{(props.singlecard.lyrics).slice(0, 35)}...</p>
        </div>

      </div>


    </div>
  )
}

export default SingleCard
