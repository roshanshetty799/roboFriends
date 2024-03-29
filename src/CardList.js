import React from 'react';
import Card from './Card';



const CardList = function ({robots}) {

  const cardComponent = robots.map(function(user,i) {
    return <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}/>
  })

  return(
        <div>
        {cardComponent}
        </div>
  );

}

export default CardList;
