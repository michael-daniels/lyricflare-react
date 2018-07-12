import React, { Component } from 'react';
import SingleCard from './SingleCard';

class SingleCardList extends Component {

  render() {

    let allCards = this.props.allcards.map((singleCard, idx) => {
      return <SingleCard key={idx} singlecard={singleCard} />
    })
    console.log(allCards)

    return (
      <div className="row">
        {allCards}
      </div>
    );
  }

}

export default SingleCardList;
