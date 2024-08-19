import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from "../utils/pizzas"



const Home = () => {
    return (
      <>
        <Header />
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between">
            {pizzas.map((pizza) => (
              <CardPizza
                key={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default Home;