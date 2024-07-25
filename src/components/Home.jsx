import React from 'react';

const Home = ({ dishes }) => {
  return (
    <div className="component-container">
      {dishes.map(dish => (
        <div key={dish.id} className="home-dish">
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          <p>Price: ${dish.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
