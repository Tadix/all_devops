import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('javaapi/v1/products')
    .then(resp => resp.json())
    .then(json => setProducts(json))
    .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    fetch('pythonapi/v1/payments')
    .then(resp => resp.json())
    .then(json => setPayments(json))
    .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    fetch('nodeapi/v1/commande')
    .then(resp => resp.json())
    .then(json => setOrders(json))
    .catch(error => console.log(error))
  }, []);

  const lisProducts = products.map(product => 
    <li>{product.id} - {product.title}</li>
  );

  const listPayments = payments.map(payment => 
    <li>{payment.id} - {payment.description} : {payment.amount}</li>
  );

  const listOrders = orders.map(order => 
    <li>{order.id} - {order.name} : {order.price}</li>
  );

  return (
    <div>
      <div>
        <h2>Products list</h2>
        <ul>{lisProducts}</ul>
      </div>

      <div>
        <h2>Payments list</h2>
        <ul>{listPayments}</ul>
      </div>

      <div>
        <h2>Orders list</h2>
        <ul>{listOrders}</ul>
      </div>
    </div>
    
  );
}

export default App;
