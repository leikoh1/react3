import React, { useState } from "react";
import { pizzaCart } from "../utils/pizzas"; 

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const incrementar = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decrementar = (id) => {
    setCart(cart.map(pizza => {
      if (pizza.id === id) {
        if (pizza.quantity > 1) {
          return { ...pizza, quantity: pizza.quantity - 1 };
        } else {
          return null; 
        }
      }
      return pizza;
    }).filter(pizza => pizza !== null));
  };

  const removerPizza = (id) => {
    setCart(cart.filter(pizza => pizza.id !== id));
  };

  const calcularTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  const pagar = () => {
    alert('Sin funcionamiento por ahora');
  };

  return (
    <div className="container my-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(pizza => (
            <div key={pizza.id} className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">Precio: ${pizza.price}</p>
                    <p className="card-text">Cantidad: {pizza.quantity}</p>
                    <button className="btn btn-secondary me-2" onClick={() => incrementar(pizza.id)}>+</button>
                    <button className="btn btn-secondary me-2" onClick={() => decrementar(pizza.id)}>-</button>
                    <button className="btn btn-danger" onClick={() => removerPizza(pizza.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${calcularTotal()}</h3>
          <button className="btn btn-primary" onClick={pagar}>Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;